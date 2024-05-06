import React, { useState } from 'react';
import Footer from './components/footer/';
import Header from './components/header';
import { Container, Layout } from './layout';
import CookieBanner from 'react-cookie-banner';
export const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    return (
        <Layout sidebar={sidebarOpen}>
          {/*  <CookieBanner
                styles={{
                    banner: { position: 'absolute', bottom: 0, height: 'auto' },
                }}
                message="Onze site maakt gebruik van koekjes! Lekker toch? Wil je meer weten over wat jouw rechten zijn en hoe wij met die koekjes omgaan? Lees dat hier in ons"
                link={<a href="/gdpr">gdpr-beleid</a>}
                onAccept={() => {
                    alert('de koekjes zijn geaccepteerd :)');
                }}
                cookie="user-has-accepted-cookies"
                buttonMessage="Ik snap het."
                dismissOnScrollThreshold={100}
            />*/}

            <Header setOpenModal={setsidebarOpen} openModal={sidebarOpen} />
            <Container>{children}</Container>
            <Footer />
        </Layout>
    );
};
