import { DefaultLayout } from 'layouts/DefaultLayout';
import { Pinkomsten_para, PrivacyContainer, Privacy_heading } from 'styles/typography';

const Conditions: Page = () => (
    <main>
        <PrivacyContainer>
            <br />
            <Privacy_heading data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                Inkomsten Disclaimer
            </Privacy_heading>
            <p>Laatst Geüpdate op 14 november 2022</p>
            <Pinkomsten_para data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                INKOMSTEN DISCLAIMER: WIJ GELOVEN NIET IN “WORD-SNEL-RIJK” PROGRAMMA’S. WIJ GELOVEN
                IN HARD WERKEN, WAARDE TOEVOEGEN EN ANDEREN HELPEN. DIT IS DAN OOK WAARVOOR ONZE
                PROGRAMMA’S ONTWORPEN ZIJN. WIJ MAKEN GEEN CLAIMS OF GARANTIES DAT JIJ GELD ZULT
                VERDIENEN MET ONZE IDEEËN, INFORMATIE, PROGRAMMA’S OF STRATEGIEËN. WE KENNEN JOU
                NIET EN DAARNAAST ZIJN DE RESULTATEN DIE JIJ IN JOUW LEVEN BEHAALD JOUW VOLLEDIGE
                VERANTWOORDELIJKHEID. ZIJN WE HET DAAROVER EENS? WIJ ZIJN HIER OM JOU TE HELPEN DOOR
                MIDDEL VAN ONZE BESTE STRATEGIEËN TE DELEN MET JOU ZODAT JIJ SNELLER BIJ JOUW DOELEN
                EN DROMEN KAN GERAKEN. MAAR, NIETS OP DEZE PAGINA’S, WEBSITE OF EMAILS IS EEN
                BELOFTE OF GARANTIE VOOR TOEKOMSTIGE VERDIENSTEN. FINANCIËLE CIJFERS DIE HIER
                GENOEMD WORDEN, OF OP ÉÉN VAN ONZE ANDERE PAGINA’S OF EMAILS, ZIJN SIMPELWEG
                GEBASEERD OP VOORAFGAANDE RESULTATEN, EN HOREN NIET ALS EXACT OF BELOOFD BESCHOUWD
                TE WORDEN – ALLE GETALLEN ZIJN ER ALLEEN VOOR ILLUSTRATIEVE DOELEINDEN. ALS JE
                VRAGEN HEBT DAN KUN JE DIE MAILEN NAAR: INFO@EXKUUS.BE
            </Pinkomsten_para>
        </PrivacyContainer>
    </main>
);

Conditions.Layout = DefaultLayout;

export default Conditions;

import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus ALGEMENE VOORWAARDEN | Inkomsten Disclaimer"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, nieuwsbrief, waardevolle emails, Kjell YouTube, Kjell TikTok, Kjell Instagram, Kjell Insta, disclaimer"
        description="Wij geloven niet in 'get rich quick' of 'word snel rijk'.  Hard werken is de boodschap. Lees zeker onze algemene voorwaarden :)"
    />
);
