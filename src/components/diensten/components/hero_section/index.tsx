import Image from '@/common/image';
import { ReactComponent as Diensten_hero } from '../../../../Images/svg/diensten_hero.svg';
import React from 'react';

import {
    Heading,
    Hero_,
    Hero_Image,
    Hide,
    Left_Section,
    Mobile_Heading,
    Mobile_Sub_Heading,
    Mobile_Sub_HeadingColor,
    Sub_Heading,
    Sub_HeadingColor,
} from './hero';
import { Header } from 'styles/typography';
const Hero = () => {
    return (
        <>
            <br />
            <Mobile_Heading data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                Leer meer over onze programma's
            </Mobile_Heading>
            <Hero_ data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                <Hide>
                    <Left_Section
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        <Heading>Leer meer over onze programma's</Heading>
                        <Sub_Heading
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                            data-sal-delay="2000ms"
                        >
                            Wij maken van ondernemen kinderspel. Dus wat is jouw <br />
                            <Sub_HeadingColor
                                data-sal="fade"
                                data-sal-easing="ease-in"
                                data-sal-duration="3000ms"
                            >
                                Exkuus?
                            </Sub_HeadingColor>
                        </Sub_Heading>
                    </Left_Section>
                </Hide>
                <Hero_Image data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Diensten_hero
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    />
                </Hero_Image>
            </Hero_>
            <Mobile_Sub_Heading
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                Wij maken van ondernemen kinderspel. Dus wat is jouw
                <Mobile_Sub_HeadingColor>Exkuus?</Mobile_Sub_HeadingColor>
            </Mobile_Sub_Heading>
        </>
    );
};

export default Hero;
