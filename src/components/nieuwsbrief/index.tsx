import { NewsWrapper, FormWrapper } from './nieuwsbrief';
import { Header, Desc, TextBlue, TextYellow } from 'styles/typography';
import TextFieldComponent from '../common/textField';
import Button from '../common/commonButton';
import Dialog from '@/common/modal';
import { useState } from 'react';
import { handleSubmit } from 'utils/nieuwsbrief-active-campaign';

const Nieuwsbrief = () => {
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
        <NewsWrapper>
            <Dialog
                title="JE BENT INGESCHREVEN!"
                open={state.isDialogOpen}
                closeModal={closeModal}
            />
            <Header
                data-sal="fade"
                data-sal-easing="ease-in"
                data-sal-duration="3000ms"
                data-sal-delay="3000ms"
            >
                Niet 1, niet 2... maar <TextBlue fontWeight="700">3 waardevolle emails</TextBlue>{' '}
                per week!
            </Header>
            <Desc data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                Wij geloven in kwaliteit boven kwantiteit. Door je aan te melden ontvang je iedere
                week <TextBlue>1 nieuwe YouTube video, 1 ervaring en 1 succesverhaal</TextBlue>.
            </Desc>
            <Desc>
                100% waarde - <TextYellow> 100% gratis</TextYellow>
            </Desc>
            <FormWrapper onSubmit={e => handleSubmit(e, openModal)}>
                <TextFieldComponent
                    text="Jouw volledige naam"
                    background-color="#d9d9d9"
                    color="#00000080"
                    border="1px solid #1f4668"
                    margin-top="15px"
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
                    margin-top="15px"
                    font-size="16px"
                    font-weight={300}
                    name="email"
                    required
                />
                <Button
                    text="bezorg mij die mails"
                    background-color="#FFDF2B"
                    color="#000000"
                    border="1px solid #000000"
                    font-size="17px"
                    text-align="center"
                    margin-top="18px"
                />
            </FormWrapper>
        </NewsWrapper>
    );
};

export default Nieuwsbrief;
