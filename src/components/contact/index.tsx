import React, { useState, lazy, Suspense } from 'react';
import {
    ContactWrapper,
    SocialIcon,
    Icon,
    TopAdornment,
    AdornmentWrapper,
    Container,
} from './contact';
import { Header, Content } from 'styles/typography';
import TextFieldComponent from '../common/textField';
import { ReactComponent as BannerImg } from '../../Images/svg/contact_banner.svg';
import Button from '../common/commonButton';
import Swal from 'sweetalert2';
import Dialog from '@/common/modal';
import Image from '@/common/image';
const MaterialIcon = lazy(() => import('material-icons-react'));
import { ACTIVE_CAMPAIGN_CONTACT_URL, ACTIVE_CAMPAIGN_CONTACT_FORM_ID } from 'constant/config';
import { TextArea } from '@/common/textField/textField';

const Contact = () => {
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

    function handleSubmit(e: any) {
        e.preventDefault();

        // Rest of your form submission logic...
        const formData = new FormData();
        formData.append('u', ACTIVE_CAMPAIGN_CONTACT_FORM_ID);
        formData.append('f', ACTIVE_CAMPAIGN_CONTACT_FORM_ID);
        formData.append('s', '');
        formData.append('c', '0');
        formData.append('m', '0');
        formData.append('act', 'sub');
        formData.append('v', '3');
        formData.append('fullname', e.target[0].value);
        formData.append('email', e.target[1].value);
        formData.append('phone', e.target[2].value);
        formData.append('field[39]', e.target[3].value);

        // Replace new line characters with a unique identifier
        fetch(ACTIVE_CAMPAIGN_CONTACT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                e.target.reset(); // Reset the form
                openModal(); // Show the popup
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Sorry an error has occurred!',
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
            });
    }

    return (
        <Suspense fallback={<div />}>
            <ContactWrapper>
                <Dialog
                    title="WE HEBBEN JOUW VRAAG GOED ONTVANGEN :)"
                    open={state.isDialogOpen}
                    closeModal={closeModal}
                />
                <Container>
                    <Header text-align="left">Hoe kan je ons contacteren?</Header>
                    <br />
                    <BannerImg />
                    <br />
                    <br />
                    <Header text-align="left">Volg ons op een van onderstaande socials</Header>
                    <SocialIcon>
                        <a
                            target="_blank"
                            href="https://www.tiktok.com/@kjellfruytier"
                            rel="noreferrer"
                        >
                            <Icon>
                                {typeof window !== 'undefined' ? (
                                    <MaterialIcon icon="tiktok" color="#FFDF2B" size={50} />
                                ) : null}
                            </Icon>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/kjellfruytier/"
                            rel="noreferrer"
                        >
                            <Icon>
                                {typeof window !== 'undefined' ? (
                                    <MaterialIcon icon="facebook" color="#1F4668" size={50} />
                                ) : null}
                            </Icon>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/kjellfruytier/"
                            rel="noreferrer"
                        >
                            <Icon>
                                <Image filename="insta_net_log.png" alt="logo" width="55px" />
                            </Icon>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/c/kjellfruytier"
                            rel="noreferrer"
                        >
                            <Icon>
                                <Image filename="youtube.png" alt="logo" width="50px" />
                            </Icon>
                        </a>
                    </SocialIcon>
                    <br />
                    <Header text-align="left">
                        Heb je een vraag? Je kan ons altijd een mailtje sturen!
                        <Content>(en ja, wij beantwoorden ze persoonlijk EN op maat ;))</Content>
                    </Header>
                </Container>

                <Container onSubmit={handleSubmit}>
                    <AdornmentWrapper>
                        <TopAdornment>Naam*</TopAdornment>
                        <TextFieldComponent
                            text="Jouw volledige naam"
                            background-color="none"
                            color="#00000080"
                            border="2px solid #FFDF2B"
                            font-size="16px"
                            font-weight={300}
                            input={true}
                            width="100%"
                            name="fullname"
                            required
                        />
                    </AdornmentWrapper>
                    <AdornmentWrapper>
                        <TopAdornment>Email *</TopAdornment>
                        <TextFieldComponent
                            text="Jouw e-mailadres"
                            background-color="none"
                            color="#00000080"
                            border="2px solid #FFDF2B"
                            font-size="16px"
                            font-weight={300}
                            input={true}
                            name="email"
                            width="100%"
                            required
                        />
                    </AdornmentWrapper>
                    <AdornmentWrapper>
                        <TopAdornment>GSM*</TopAdornment>
                        <TextFieldComponent
                            text="Jouw gsm nummer"
                            background-color="none"
                            color="#00000080"
                            border="2px solid #FFDF2B"
                            font-size="16px"
                            font-weight={300}
                            input={true}
                            name="phone"
                            width="100%"
                            required
                        />
                    </AdornmentWrapper>
                    <AdornmentWrapper>
                        <TopAdornment>Boodschap*</TopAdornment>
                        <TextFieldComponent
                            text="Typ jouw bericht"
                            enableNewLines // Enable new lines behavior only for the message field
                            background-color="none"
                            color="#00000080"
                            name="message"
                            border="2px solid #FFDF2B"
                            font-size="16px"
                            font-weight={300}
                            width="100%"
                            value={state.message}
                            onChange={e => setState({ ...state, message: e.target.value })}
                            rows={4}
                            required
                        />
                    </AdornmentWrapper>
                    <Button
                        text="STEL JOUW VRAAG"
                        background-color="#1F4668"
                        color="#F8FAF6"
                        font-size="20px"
                        width="65%"
                        margin-left="2%"
                        margin-top="50px"
                    />
                </Container>
            </ContactWrapper>
            <br />
        </Suspense>
    );
};

export default Contact;
