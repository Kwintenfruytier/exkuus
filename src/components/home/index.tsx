import {
    HomeWrapper,
    MidWrapper,
    MR_image,
    ArrowText,
    FormWrapper,
    Home,
    Left_Section,
    Heading,
    Home_Image,
    VideoWrapper,
    Video,
    Right_Section,
    Center,
    QuoteWrapper,
    Quote,
    ScrollWrapper,
    FlexCol,
    ArrowContainer,
} from './home';
import Image from '@/common/image';
import { Header, P, TextBlue, Bold, IconFiled_wrapper } from 'styles/typography';
import TextFieldComponent from '../common/textField';
import Button from '../common/commonButton';
import { ReactComponent as Back } from '../../Images/svg/arrow_forward.svg';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import heroMP4 from '../../Images/homeHeroVideoMain.mp4';
import heroWebm from '../../Images/homeHeroVideoSecondary.webm';
import heroImagePlaceholder from '../../Images/homeHeroVideoPlaceholder.jpg';
import IconField from '@/diensten/common/Iconfield';
import Dialog from '@/common/modal';
import { quotes } from 'constant/home';
import { handleSubmit } from 'utils/nieuwsbrief-active-campaign';
const HomePage = () => {
    const [state, setState] = useState({
        isDialogOpen: false,
    });

    const openModal = () => {
        setState({
            ...state,
            isDialogOpen: true,
        });
    };

    const closeModal = () => {
        setState({
            ...state,
            isDialogOpen: false,
        });
    };

    return (
        <HomeWrapper style={{ marginTop: '10rem' }}>
            <Dialog open={state.isDialogOpen} closeModal={closeModal} />

            <VideoWrapper>
                <Video>
                    <video
                        preload="none"
                        title="Kjell praat over zichzelf en zijn bedrijf. Hij vertelt je ook dat ook jij financiële vrijheid kan ervaren!"
                        controls
                        width={'100%'}
                        playsInline
                        poster={heroImagePlaceholder}
                        style={{ objectFit: 'cover', border: '4px solid black' }}
                    >
                        <source src={heroMP4} type="video/mp4" />
                        <source src={heroWebm} type="video/webm" />
                        <track default kind="captions" srcLang="nl"></track>
                    </video>
                    {/*<img
                        src={heroGif}
                        alt="openen van een kluis om zo financiële vrijheid te vinden"
                        
                    /> */}
                </Video>
                <Right_Section>
                    <Header>
                        Financiële{' '}
                        <TextBlue fontWeight="700" mobileFontSize="26px" fontSize="44px">
                            vrijheid
                        </TextBlue>{' '}
                        door te adverteren voor lokale ondernemers?{' '}
                        <TextBlue fontWeight="700">Dat kan!</TextBlue>
                    </Header>
                    <Center>
                        <Link to="/afspraak" style={{ textDecoration: 'none', color: 'black' }}>
                            <Button
                                text="maak een afspraak en ontdek hoe"
                                background-color="#FFDF2B"
                                color="#000000"
                                border="1px solid #000000"
                                font-size="15px"
                                letter-spacing="2px"
                                text-transform="uppercase"
                                t_width="200px"
                                m_width="180px"
                            />
                        </Link>
                    </Center>
                </Right_Section>
            </VideoWrapper>
            <Home data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                <Left_Section>
                    <Heading>Wat zeggen anderen over ons?</Heading>
                </Left_Section>
                <Home_Image>
                    <Image
                        filename="testimonial_hero.jpg"
                        alt="groepsfoto Exkuus community"
                        width=""
                        height=""
                        loading="eager"
                        placeholder="blurred"
                    />
                </Home_Image>
            </Home>

            <ScrollWrapper data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                <QuoteWrapper>
                    {quotes.map((quote, index) => (
                        <Quote key={index} bg={quote.bg} color={quote.color}>
                            <FlexCol
                                data-sal="fade"
                                data-sal-easing="ease-in"
                                data-sal-duration="3000ms"
                            >
                                <span
                                    style={{
                                        paddingBottom: '5px',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    &#10075;&#10075;
                                    <div
                                        style={{
                                            fontSize: '16px',
                                            color: quote.color,
                                            marginTop: '-5px',
                                        }}
                                    >
                                        {quote.name}
                                    </div>
                                    &#10076;&#10076;
                                </span>
                                <span style={{ fontStyle: 'italic' }}>{quote.name2}</span>
                            </FlexCol>
                        </Quote>
                    ))}
                </QuoteWrapper>
            </ScrollWrapper>

            <div style={{ margin: '0 auto', maxWidth: '580px' }}>
                <ArrowContainer mobileWidth="180px">
                    <Link to="/testimonials" style={{ textDecoration: 'none' }}>
                        <ArrowText>
                            <MR_image marginright="10px">
                                <Back />
                            </MR_image>
                            <P>Ontdek meer succesverhalen</P>
                        </ArrowText>
                    </Link>
                </ArrowContainer>
                <br />
                <MidWrapper data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Header text-align="left">Nog veel vraagtekens?</Header>
                    <Header
                        mobileFontSize="16px"
                        fontSize="22px"
                        text-align="left"
                        padding_bottom="50px"
                    >
                        Wat als je ...
                    </Header>
                    <ul
                        className="homePoints"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        <li>
                            <P padding_bottom="8px" width_mb="98%">
                                ... kan werken van overal ter wereld?
                            </P>
                        </li>
                        <li>
                            <P padding_bottom="8px" width_mb="98%">
                                ... je nooit nog financiële zorgen hoeft te maken?
                            </P>
                        </li>
                        <li>
                            <P padding_bottom="8px" width_mb="98%">
                                ... elke dag vol energie aan de dag kunt beginnen?
                            </P>
                        </li>

                        <P width_mb="98%" padding_top="1rem" padding_bottom="1rem">
                            <Link to="/afspraak" style={{ textDecoration: 'none', color: 'black' }}>
                                <TextBlue mobileFontSize="20px" fontSize="22px">
                                    Maak een vrijblijvende afspraak
                                </TextBlue>
                            </Link>{' '}
                            en krijg jouw gratis eerste training!
                        </P>
                    </ul>
                </MidWrapper>

                <Header data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    Een paar leuke wist je datjes
                </Header>
                <IconFiled_wrapper
                    maxWidth="600px"
                    padding_top="50px"
                    padding_bottom="50px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <IconField
                        icon="military_tech"
                        color="#FFD580"
                        width="20px"
                        mobile_width="15px"
                        paragraph="wij de allereerste Vlamingen zijn die de ‘2 Comma Club Award’ ontvingen ($1,000,000 in sales)? "
                    />
                    <IconField
                        icon="volunteer_activism"
                        color="#A53030"
                        width="20px"
                        mobile_width="20px"
                        paragraph="Kjell zijn eerste marathon uitliep en samen met zijn cursisten meer dan €8810 verzamelden voor het goede doel?"
                    />
                    <IconField
                        icon="euro_symbol"
                        color="#1F4668"
                        width="20px"
                        mobile_width="20px"
                        paragraph="wij al meer dan 300 Vlaamse werknemers hielpen naar financiële vrijheid en onafhankelijkheid?"
                    />
                    <br />
                    <br />
                    <div style={{ marginLeft: '55px' }}>
                        <P width_mb="100%">
                            Meer weten over <TextBlue fontSize="21px">wie</TextBlue> we zijn,{' '}
                            <TextBlue fontSize="21px">waar</TextBlue> we voor staan, en{' '}
                            <TextBlue fontSize="21px">wat</TextBlue> ons
                            <TextBlue fontSize="21px"> doel </TextBlue>is?
                        </P>
                    </div>
                </IconFiled_wrapper>
                <ArrowContainer>
                    <Link to="/over-ons">
                        <ArrowText center="start">
                            <MR_image marginright="10px">
                                <Back />
                            </MR_image>
                            <P data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                                <Bold>Lees hier meer over ons</Bold>
                            </P>
                        </ArrowText>
                    </Link>
                </ArrowContainer>
                <br />
                <Header data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    Elke week 3 mails
                    <br /> ontvangen die jouw
                    <br /> leven zomaar kunnen
                    <br />
                    <TextBlue fontWeight="700" mobileFontSize="27px" fontSize="44px">
                        veranderen
                    </TextBlue>
                    ?
                </Header>
                <FormWrapper
                    onSubmit={e => handleSubmit(e, openModal)}
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <TextFieldComponent
                        text="Jouw volledige naam"
                        background-color="#d9d9d9"
                        color="#00000080"
                        border="1px solid #1f4668"
                        margin-top="25px"
                        font-size="16px"
                        font-weight={300}
                        name="fullname"
                        required
                    />
                    <TextFieldComponent
                        text="Jouw e-mailadres"
                        background-color="#d9d9d9"
                        color="#00000080"
                        border="1px solid #1f4668"
                        margin-top="25px"
                        font-size="16px"
                        font-weight={300}
                        name="email"
                        required
                    />
                    <Button
                        text="bezorg mij die mails"
                        background-color=" #ffdf2b"
                        color="#000000"
                        border="1px solid #000000"
                        font-size="18px"
                        text-align="center"
                    />
                </FormWrapper>
            </div>
        </HomeWrapper>
    );
};

export default HomePage;
