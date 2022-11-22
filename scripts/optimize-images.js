#!/usr/bin/node
/* eslint-disable @typescript-eslint/no-var-requires */

const sharp = require('sharp');
const { sync: globSync } = require('glob');
const fs = require('fs');
const path = require('path');

const imagePaths = globSync('assets/images/**/*.{png,jpg,jpeg}');
const MAX_WIDTH = 2400;
const QUALITY = 90;

let imagesProcessedCount = 0;
let bytesSaved = 0;

const optimize = async () => {
    await Promise.all(
        imagePaths.map(async imagePath => {
            let desiredWidth = MAX_WIDTH;

            const { dir, name, ext } = path.parse(imagePath);
            if (name.endsWith('-original')) {
                return;
            }

            const imagePathOriginal = path.join(dir, `${name}-original${ext}`);
            const imageOriginalStats = await fs.promises.stat(imagePathOriginal).catch(() => false);

            if (!imageOriginalStats) {
                await fs.promises.copyFile(imagePath, imagePathOriginal);
            }

            const imageStats = imageOriginalStats || (await fs.promises.stat(imagePath));
            const imageStream = sharp(imageOriginalStats ? imagePathOriginal : imagePath);
            const imageInfo = await imageStream.metadata();

            if (imageInfo.width < MAX_WIDTH) {
                if (!imageOriginalStats) {
                    await fs.promises.copyFile(imagePathOriginal, imagePath);
                }
                if (imageStats.size < 1024 * 256) {
                    return;
                }

                desiredWidth = imageInfo.width;
            }

            await fs.promises.unlink(imagePath);

            if (imagePath.endsWith('.png')) {
                await imageStream.resize(desiredWidth).png().toFile(imagePath);
            } else {
                await imageStream.resize(desiredWidth).jpeg({ quality: QUALITY }).toFile(imagePath);
            }

            const processedImageInfo = await fs.promises.stat(imagePath);

            if (imageOriginalStats.size < processedImageInfo.size) {
                await fs.promises.copyFile(imagePathOriginal, imagePath);
            } else {
                imagesProcessedCount++;
                bytesSaved += imageOriginalStats.size - processedImageInfo.size;
            }
        })
    );

    console.log(`Processed ${imagesProcessedCount} images, saving a total of ${bytesSaved} bytes.`);
};

optimize();
