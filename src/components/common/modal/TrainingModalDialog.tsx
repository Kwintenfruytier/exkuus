import Image from '@/common/image';
import { Paragraph } from 'styles/typography';
import { ModalWrapper, Between, Icon } from './modal';
import Modal from 'react-modal';
import { ReactComponent as Close } from 'Images/svg/close.svg';
import Button from '../commonButton';
import { useState } from 'react';
import { ACTIVE_CAMPAIGN_CONTACT_URL } from 'constant/config';
import styled from '@emotion/styled';

const customStyles = {
    content: {
        outerWidth: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        background: '#F8FAF6',
        marginTop: '3rem',
    },
};

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #f5f5f5;

    &:focus {
        outline: none;
        box-shadow: 0 0 2px #ffdf2b, 0 0 4px #ffdf2b, 0 0 8px #ffdf2b;
    }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputLabel = styled.label`
    font-size: 20px;
    margin-top: 20px;
`;

const TrainingModalDialog = ({ isOpen, closeModal }: any) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('u', '48');
        formData.append('f', '48');
        formData.append('s', '');
        formData.append('c', '0');
        formData.append('m', '0');
        formData.append('act', 'sub');
        formData.append('v', '3');
        formData.append('fullname', fullName);
        formData.append('email', email);
        fetch(ACTIVE_CAMPAIGN_CONTACT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                closeModal();
                window.location.href = 'https://www.exkuus.be/ec-bedankt-1';
            })
            .catch(() => {
                // Handle error
            });
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Training Modal"
        >
            <Between>
                <div>
                    <Image
                        filename="logo.png"
                        alt="logo"
                        width="130px"
                        mobile_width="120px"
                        padding_top="1rem"
                    />
                </div>
                <Icon onClick={closeModal}>
                    <Close />
                </Icon>
            </Between>
            <ModalWrapper>
                <Paragraph fontSize="30px">Ontvang jouw gratis training</Paragraph>
                <Form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="fullname">Naam</InputLabel>
                    <Input
                        type="text"
                        name="fullname"
                        onChange={e => setFullName(e.target.value)}
                        required
                        placeholder="jouw naam"
                    />
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="jouw emailadres"
                    />
                    <Button
                        type="submit"
                        text="Ik wil de gratis training!"
                        backgroundColor="#ffdf2b"
                        fontSize="25px"
                        color="black"
                    />
                </Form>
            </ModalWrapper>
        </Modal>
    );
};
export default TrainingModalDialog;
