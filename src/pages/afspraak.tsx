import Image from '@/common/image';
import React, { useState } from 'react';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';
import { Header, TextBlue } from 'styles/typography';
import Dialog from '@/common/modal';

const Booking = () => {
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log('onProfilePageViewed'),
        onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
        onEventTypeViewed: () => console.log('onEventTypeViewed'),
        onEventScheduled: e => console.log(e.data.payload),
    });

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    marginTop: 250,
                }}
            >
                <Image
                    filename="bookingHero.jpg"
                    alt="afspraak hero afbeelding. 2 mensen highfiven"
                    width="450px"
                    height="100%"
                    mobile_width="250px"
                />
                <Header
                    style={{ paddingBottom: 50, textAlign: 'center' }}
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    Wees trots op jezelf! <br />
                    je hebt de eerste stap gezet naar
                    <br />
                    <TextBlue fontWeight="700" mobileFontSize="28px" fontSize="45px">
                        succes/een vrijer leven!
                    </TextBlue>
                </Header>
            </div>
            <InlineWidget
                styles={{ height: '1100px' }}
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
                url="https://calendly.com/elysium-coaching/anderzom"
            />
        </div>
    );
};

export default Booking;

{
    /* SEO SECTION*/
}
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus AFSPRAAK | Verander vandaag nog jouw leven!"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, Afspraak, Afspraak Kjell, Kjell afspraak"
        description="Ben jij klaar om financiële vrijheid te ervaren? Maak dan nu nog een afspraak!"
    />
);
