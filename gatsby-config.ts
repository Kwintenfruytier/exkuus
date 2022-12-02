import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    trailingSlash: 'always',
    siteMetadata: {
        title: 'Exkuus',
        author: 'Exkuus.com',
        siteUrl: `https://exkuus.com`,
        description:
            'Ook jij kan €10.000 per maand verdienen en financiële vrijheid ondervinden. Hoe? Door gepassioneerde ondernemers te helpen groeien.',
        keywords:
            'exkuus, Kjell, financiële vrijheid, online marketing, Nomi, is Kjell betrouwbaar?, exkuus.com, exkuus.be, excuus',
        image: 'exkuus_logo.png',
        lang: 'nl',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
                devMode: false,
            },
        },
        {
            resolve: 'gatsby-plugin-vercel',
            options: {
                // (optional) Prints metrics in the console when true
                debug: false,
            },
        },
        /*  {
            resolve: 'gatsby-plugin-preconnect',
            options: {
                domains: [
                    'https://fonts.googleapis.com',
                    'https://fonts.gstatic.com',
                    'fast.wistia.net',
                    'connect.facebook.net',
                ],
            },
        },*/
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://exkuus.com',
                sitemap: 'https://exkuus.com/sitemap/sitemap-0.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-svgr`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                    quality: 35,
                },
            },
        },
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
                // The option defaults to true
                checkSupportedExtensions: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Exkuus`,
                short_name: `Exkuus`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `assets/icons/favicon.png`,
            },
        },
        /* {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                mode: 'async',
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                    'https://cdnjs.cloudflare.com',
                ],
                web: [
                    {
                        name: `Text Me One`,
                        file: 'https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap',
                    },
                    {
                        name: `Cairo`,
                        file: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900;1000&display=swap',
                    },
                    {
                        name: 'Material Icon',
                        file: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                    },
                ],
            },
        },*/

        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'nl',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://exkuus.com`,
            },
        },

        /* {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-T23N24V',

                includeInDevelopment: false,
            },
        },
        */
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: '372314410424595',
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`],
                gatsbyRemarkPlugins: [`gatsby-remark-copy-linked-files`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `./src/content/blog/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/Images/`,
            },
        },
    ],
};

export default config;
