import IconField from '../components/diensten/common/Iconfield';
import { ReactComponent as Anderzom } from '../Images/svg/anderzom.svg';
import Button from '../components/common/commonButton';
import {
    BackgroundShadow,
    Banner_img,
    Banner_img_wrapper,
    Button_wrapper,
    Diensten_description1,
    Diensten_description2,
    Diensten_descriptionColor,
    Diensten_Hero_title,
    Diensten_paragraph,
    Diensten_section,
    Diensten_statement,
    Diensten_statement_wrapper,
    Diensten_title,
    Dienten_Button,
    IconFiled_wrapper,
    TextBlue,
} from 'styles/typography';
import Hero from '../components/diensten/components/hero_section';
import { Link, HeadFC } from 'gatsby';
import { diensten_data } from 'constant/diensten';
import { Paragraph } from '@/diensten/common/Iconfield/Iconfiled';

const diensten = () => {
    return (
        <Diensten_section>
            <Hero data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />
            <Banner_img_wrapper
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                <Banner_img>
                    <Anderzom />
                </Banner_img>
            </Banner_img_wrapper>

            <Diensten_statement>
                <BackgroundShadow />
                <Diensten_title
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    Herken jij je in 1 van deze uitspraken?
                </Diensten_title>

                <Diensten_description1
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    “Ik ben ambitieus en wil meer uit het leven halen dan mijn 9-5”
                </Diensten_description1>
                <Diensten_description2
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    “Al mijn dagen zijn hetzelfde. Ik ben dat echt beu!”
                </Diensten_description2>
                <Diensten_description1
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    “Ik wil meer tijd voor mijzelf en de personen om wie ik geef.”
                </Diensten_description1>
                <Diensten_description2
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    “Ik ben bereid om hard te werken voor het behalen van mijn doelen en dromen”
                </Diensten_description2>
                <Diensten_description1
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    “Niets komt vanzelf, toch?”
                </Diensten_description1>
            </Diensten_statement>

            <Diensten_paragraph
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                <TextBlue mobileFontSize="22px" fontSize="38px">
                    Ja, het kan anders.
                </TextBlue>{' '}
                Wat kan je verwachten van ons ‘anderzom’ coaching programma?
            </Diensten_paragraph>
            <Diensten_statement_wrapper
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                <IconField
                    icon="support_agent"
                    color="#1F4668"
                    paragraph="24/7 ondersteuning & begeleiding"
                />
                <IconField
                    icon="devices"
                    color="#1F4668"
                    paragraph="geen technische kennis vereist"
                />
                <IconField
                    icon="apartment"
                    color="#1F4668"
                    paragraph="jouw eigen advertentie bedrijf"
                />
                <IconField
                    icon="rocket_launch"
                    color="#1F4668"
                    paragraph="succes binnen 90 dagen"
                />

                <IconField
                    icon="diversity_3"
                    color="#1F4668"
                    paragraph="jouw dagelijkse accountability partner"
                />
                <IconField
                    icon="volunteer_activism"
                    color="#1F4668"
                    paragraph="Omringd door gelijkgestemden"
                />
                <IconField
                    icon="gpp_maybe"
                    color="#1F4668"
                    paragraph="uniek & exclusief (kleine groep)"
                />
                <IconField
                    icon="school"
                    color="#1F4668"
                    paragraph="1x per KWARTAAL een virtuele mastermind"
                />
            </Diensten_statement_wrapper>
            <Diensten_descriptionColor
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                Ben jij klaar om de stap te zetten?
            </Diensten_descriptionColor>
            <Link to="/afspraak">
                <Dienten_Button
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    IK BEN KLAAR OM MIJN LEVEN TE VERANDEREN
                </Dienten_Button>
            </Link>
            {/*  <Diensten_paragraph></Diensten_paragraph>
            <Diensten_Hero_title
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                 NEXT LEVEL MASTERMIND
            </Diensten_Hero_title>
            <Diensten_paragraph
                fontsize="22px"
                text_align="start"
                font_weight="400"
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
            >
                Ben je al ondernemer en struikel je om door te schalen met je bedrijf? Wil je naar
                het volgende niveau gaan? Dan hebben wij voor jou <TextBlue>dé</TextBlue> oplossing!
                In onze <TextBlue>Next Level Mastermind</TextBlue> mag je de volgende puntjes
                verwachten:
            </Diensten_paragraph>
            <Diensten_paragraph
                fontsize="22px"
                text_align="start"
                mobile_width="282px"
                marginbottom="24px"
                margintop="-35px"
                font_weight="400"
            >
                Naast
                <TextBlue mobileFontSize="22px" fontSize="26px">
                    {' '}
                    gratis toegang
                </TextBlue>{' '}
                tot het Anderzom Coaching Programma:
                <br />
                <br />
                <IconFiled_wrapper>
                    {diensten_data.map((items, index) => (
                        <ul key={index}>
                            <li
                                data-sal="fade"
                                data-sal-easing="ease-in"
                                data-sal-duration="3000ms"
                            >
                                <Paragraph>{items.paragraph}</Paragraph>
                            </li>
                        </ul>
                    ))}
                </IconFiled_wrapper>
            </Diensten_paragraph>

            <Button_wrapper>
                <Link to="/contact">
                    <Button
                        text="IK WIL MIJN BEDRIJF OPSCHALEN"
                        background-color="#1F4668"
                        color="#F8FAF6"
                        border="none"
                        border-radius="10px"
                        font-size="16px"
                        text-align="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    />
                </Link>
                    </Button_wrapper> */}
        </Diensten_section>
    );
};

export default diensten;

{
    /* SEO SECTION*/
}
import React from 'react';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus PROGRAMMA | Welk programma bieden we aan?"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom"
        description="Ontdek wat wij voor jou kunnen doen! Lees over ons programma en contacteer ons om jouw leven te veranderen. Wat is jouwe exkuus?"
    />
);
