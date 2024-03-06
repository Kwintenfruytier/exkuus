/* eslint-disable react/no-unescaped-entities */
import {
    OverOnsWrapper,
    Main,
    MainComp,
    VerticalTags,
    Tag,
    Connector,
    Line,
    Clip,
    Rotate,
    Teams,
    Members,
    Member_Img,
    MemberIntro,
    Arrow,
    Connector2,
} from './overOns';
import Image from '@/common/image';
import { Header, TextBlue, P } from 'styles/typography';
import Button from '../common/commonButton';
import { Link } from 'gatsby';
import { ReactComponent as Over_One } from 'Images/svg/overone.svg';

const overOns = () => {
    return (
        <OverOnsWrapper>
            <Header data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                Waar staan we voor?
            </Header>
            <Main>
                <MainComp position="absolute" top="100px" m_top="200px" align="end">
                    <Over_One />
                </MainComp>
                <MainComp>
                    <P
                        width_mb="100%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        <TextBlue fontWeight="700">MISSIE</TextBlue>
                    </P>
                    <P
                        size="18px"
                        width_mb="100%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Om eender welke Vlaming met eender welke achtergrond te begeleiden,
                        ondersteunen en coachen naar een betere gedachtengang (mindset) om
                        uiteindelijk de touwtjes zelf in handen te nemen (te leiden in plaats van
                        geleid te worden) en een eigen bedrijf op te zetten (om het leven te leiden
                        waarvan zij ECHT gelukkig worden). <br />{' '}
                        <TextBlue mobileFontSize="20px" fontSize="22px">
                            Beginnend met 1 miljoen.
                        </TextBlue>
                    </P>
                </MainComp>
                <MainComp>
                    <P
                        width_mb="100%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        <TextBlue fontWeight="700">VISIE</TextBlue>
                    </P>
                    <P
                        size="18px"
                        width_mb="100%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Het denkpatroon en de conditioneringen van de mens veranderen, zodat ze
                        kunnen losbreken van het traditioneel systeem en de beste en gelukkigste
                        versie van zichzelf worden.
                    </P>
                </MainComp>
                <MainComp>
                    <P
                        width_mb="100%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        <TextBlue fontWeight="700">ONZE KERNWAARDEN</TextBlue>
                    </P>
                    <P
                        size="18px"
                        width_mb="100%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        <ul>
                            <li>
                                Focus op <strong>klantresultaten</strong> en de rest volgt vanzelf{' '}
                            </li>
                            <li>
                                Practice what you preach -<strong> Lead by example</strong>
                            </li>
                            <li>Doe niet bij een ander wat je zelf niet wilt</li>
                            <li>
                                <strong>Loyaliteit </strong> en <strong>eerlijkheid </strong>zijn
                                cruciaal
                            </li>

                            <li>
                                Educatie zo interactief en
                                <strong> fun</strong> mogelijk maken
                            </li>
                        </ul>
                    </P>
                </MainComp>
            </Main>
            <Header mb="50px" data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                Ons verhaal tot nu...
            </Header>

            <VerticalTags>
                <Tag
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        size="16px"
                        tabletSize="12px"
                        mobileSize="12px"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Kjell waagt de sprong als zelfstandig digitaal marketeer, met succes!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate
                        top="50%"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        juni 2018
                    </Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#1F4668"
                    color="white"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        color="white"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Kjell ontwikkelt na bewezen resultaten een eigen online opleidingstraject
                        dat zich focust op ondernemerschap en digitale marketing.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1F4668"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">maart 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />

            <VerticalTags>
                <Tag
                    bg="#1270B0"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        color="white"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Het traject blijkt een waar succes te zijn, Nomi springt mee aan boord en
                        samen met Kjell wordt er een nieuwe vennootschap "EXKUUS" geboren!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1270B0"
                    color="white"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">augustus 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        EXKUUS organiseert haar allereerste fysieke "Meet Up" voor een handvol
                        cursisten in Wetteren!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#FFDF2B"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate>september 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag
                    bg="#1F4668"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        color="white"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Een eerste grote revisie van het programma vind plaats, "Elysium Coaching"
                        vormt de next step.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1F4668"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">december 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />

           {/* <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#1270B0"
                    color="white"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        EXKUUS groeit en werft haar eerste functie aan, welkom "Succescoach" Ilias!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1270B0"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">juni 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />
                        */}
            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Samen met een 30-tal cursisten zakken we af naar Carré om het EK-voetbal te
                        beleven.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate>augustus 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />

            <VerticalTags>
                <Tag
                    bg="#1F4668"
                    color="white"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        color="white"
                        width_mb="120px"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Een eerste grote mijlpaal wordt bereikt, EXKUUS claimt de "Two Comma Club"
                        Award!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1F4668"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">september 2021 </Rotate>
                </Line>
            </VerticalTags>
            <Connector2 data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms" />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#1270B0"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        color="white"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Belofte maakt schuld! EXKUUS wordt vereeuwigd op ons lichaam dankzij een
                        gemeenschappelijke tattoo.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1270B0"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">oktober 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Kjell loopt een marathon voor het goede doel - "Raakzaam" wordt beloond met
                        €8810,- en enkele gloednieuwe sport accomodaties!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#FFDF2B"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate>november 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#1F4668"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        color="white"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        EXKUUS organiseert haar allereerste "evenement" voor 100 van haar cursisten,
                        een dag vol ambiance en wijsheid om nooit te vergeten.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1F4668"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">januari 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag
                    bg="#1270B0"
                    color="white"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="15px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Kjell lanceert zijn 'YouTube' kanaal waarin hij meermaals per week waarde en
                        motivatie deelt. "1 miljoen mensen hun leven impacten is het doel"!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1270B0"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">februari 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Kjell lanceert zijn 'TikTok' kanaal waarin hij 7 op 7 waarde en motivatie
                        deelt. "1 miljoen mensen hun leven impacten is het doel"!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate>maart 2022 </Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            {/*<VerticalTags>
                <Tag
                    bg="#1F4668"
                    color="white"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        EXKUUS creëert een exclusiever concept - "Next Level Mastermind" - Waarin
                        het opschalen van jezelf als ondernemer en jouw zaak centraal staan.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1F4668"
                    margin="-2px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">juni 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />
                    */}

            <VerticalTags>
                <Tag
                    bg="#1270B0"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="16px"
                        mobileSize="10px"
                        tabletSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        color="white"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    >
                        Een tweede grote revisie van het programma vind plaats, "Anderzom" is klaar
                        om te domineren binnen een intensieve coaching industrie!
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#1270B0"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="white">augustus 2022 </Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <P
                        size="14px"
                        mobileSize="10px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        color="black"
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                        padding_top="1em"
                    >
                        EXKUUS sluit zich aan bij de KMO-Portefeuille als officiële dienstverlener
                        van de Vlaamse Overheid - (Toekomstig) Ondernemers genieten hierdoor tot 30%
                        subsidies.
                    </P>
                </Tag>
                <Connector data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Clip
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                    ></Clip>
                </Connector>
                <Line
                    bg="#FFDF2B"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    <Rotate color="black">oktober 2022 </Rotate>
                </Line>
            </VerticalTags>

            <Arrow />

            <Header>ons team</Header>
            <Teams>
                <Members>
                    <Member_Img>
                        <Image
                            filename="kjell.jpeg"
                            alt="Foto Kjell"
                            width="100%"
                            height="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        />
                    </Member_Img>
                    <MemberIntro bg="#1F4668">
                        <P
                            size="19px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        >
                            KJELL
                        </P>
                        <P
                            size="16px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        >
                            De drijvende kracht achter EXKUUS. Als “Content Creator” en “Face of”
                            representeer ik mijn bedrijf met hart en ziel, dit is mijn kind.
                            Motiveren, inspireren en creativiteit schenken aan ieder ambitieus
                            individu, dat is waar mijn roeping en mijn passie liggen, elke dag
                            opnieuw.
                        </P>
                    </MemberIntro>
                </Members>
                <Members>
                    <Member_Img>
                        <Image
                            filename="nomi-2.jpg"
                            alt="Foto Nomi"
                            width="100%"
                            height="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        />
                    </Member_Img>
                    <MemberIntro bg="#1270B0">
                        <P
                            size="19px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        >
                            NOMI
                        </P>
                        <P
                            size="16px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        >
                            De ‘yang’ naast de ‘yin’, het tweede zadel van de tandem, maar vooral de
                            rust zich zelve achter de schermen bij EXKUUS. Als “Head of Operations”
                            gaat mijn focus naar het reilen en zeilen van alle operatieve taken
                            binnen ons bedrijf. Nauw en persoonlijk contact met onze klanten zorgt
                            voor een betere beleving en resultaten, deze vormen op hun beurt mijn
                            allergrootste drive.
                        </P>
                    </MemberIntro>
                </Members>
               {/* <Members>
                    <Member_Img>
                        <Image
                            filename="Ilias-main.jpg" 
                            alt="Foto Ilias"
                            width="100%"
                            height="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        />
                    </Member_Img>g
                    <MemberIntro bg="#FFDF2B">
                        <P
                            size="19px"
                            color="black"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        >
                            ILIAS
                        </P>
                        <P
                            size="16px"
                            color="black"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                            data-sal="fade"
                            data-sal-easing="ease-in"
                            data-sal-duration="3000ms"
                        >
                            De rechterhand van Kjell die instaat voor alles dat te maken heeft met
                            het ondersteunen, motiveren, inspireren en accountable houden van
                            klanten. Hij staat vol enthousiasme 24/7 paraat voor iedere cursist.
                            Anderen helpen is zijn grootste drijfveer.
                        </P>
                    </MemberIntro>
                </Members> */}
            </Teams>
            <Link to="/afspraak">
                <Button
                    text="Ik maak een afspraak"
                    background-color="#FFDF2B"
                    color="#000000"
                    border="1px solid #000000"
                    font-size="15px"
                    text-transform="uppercase"
                    margin-top="100px"
                    margin-bottom="100px"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                />
            </Link>
        </OverOnsWrapper>
    );
};

export default overOns;
