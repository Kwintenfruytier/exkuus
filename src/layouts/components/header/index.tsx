import Image from '@/common/image';
import React, { lazy, Suspense } from 'react';
import { ReactComponent as House } from '../../../Images/svg/house.svg';
import { ReactComponent as Hand } from '../../../Images/svg/hand.svg';
import { ReactComponent as Groups } from '../../../Images/svg/groups.svg';
import { ReactComponent as Feed } from '../../../Images/svg/feed.svg';
import { ReactComponent as Quiz } from '../../../Images/svg/quiz.svg';
import { ReactComponent as Contact } from '../../../Images/svg/contact.svg';
import { ReactComponent as Youtube } from '../../../Images/svg/youtube.svg';
import { ReactComponent as Menu } from '../../../Images/svg/menu.svg';
import { ReactComponent as Quote } from '../../../Images/svg/quote.svg';
const MaterialIcon = lazy(() => import('material-icons-react'));
import { Link } from 'gatsby';
import { navlinks } from 'constant/nav-links';
import { useLocation } from '@reach/router';
import {
    Calender,
    Container,
    Logo,
    MobileButton,
    MR_image,
    StickyHeader,
    Wrapper,
    CloseIconWrapper,
    LogoWrapper,
    MenuItem,
    MenuOptions,
    MobileHeaderWrapper,
    MobileModal,
    MobileToggler,
    NavLinks,
    AnchorLink,
} from './header';
import { Header_Link } from 'styles/typography';
import styled from '@emotion/styled';
import { mq } from 'styles/media-query';
import { ReactComponent as CalendarMonth } from '../../../Images/svg/calendar_month.svg';

interface Props {
    setOpenModal?: any;
    openModal?: boolean;
}

const StyledLink = styled((props: any) => <Link {...props} />)`
    height: 80px;
    text-decoration: none;
    ${mq['sm']} {
        height: 50px;
    }
`;

const Header = ({ setOpenModal, openModal }: Props) => {
    const location = useLocation();
    console.log(location);
    return (
        <Suspense fallback={<div />}>
            <StickyHeader>
                <Container>
                    <Logo>
                        <Link to="/">
                            <Image
                                filename="src/Images/exkuus_logo.png"
                                alt="Exkuus Logo"
                                width="191px"
                                mobile_width="129px"
                            />
                        </Link>
                    </Logo>

                    <Wrapper>
                        <Link to="/afspraak" style={{ textDecoration: 'none', color: 'black' }}>
                            <Calender>
                                <MR_image>
                                    <Image
                                        filename="calender.png"
                                        alt="kalender icoon"
                                        width="15px"
                                        marginRight="1em"
                                    />
                                </MR_image>
                                VERANDER NU JOUW LEVEN
                            </Calender>
                        </Link>

                        <MobileHeaderWrapper>
                            <MobileToggler onClick={() => setOpenModal(!openModal)}>
                                <Menu />
                            </MobileToggler>
                            {/* <Image filename="logo.png" alt="Logo" width="182.65px" height="96px" /> */}
                            {openModal ? (
                                <MobileModal>
                                    <LogoWrapper>
                                        <Image
                                            filename="src/Images/exkuus_logo.png"
                                            alt="logo exkuus"
                                            width="191px"
                                            mobile_width="129px"
                                        />
                                    </LogoWrapper>
                                    <CloseIconWrapper onClick={() => setOpenModal(!openModal)}>
                                        <Image
                                            filename="close.png"
                                            alt="close modal"
                                            width="21px"
                                            mobile_width="21px"
                                        />
                                    </CloseIconWrapper>
                                    <MenuOptions>
                                        <MobileButton>
                                            <MR_image marginright="20px">
                                                <CalendarMonth />
                                            </MR_image>
                                            <Link
                                                style={{ textDecoration: 'none', color: 'black' }}
                                                to="/afspraak"
                                                onClick={() => setOpenModal(!openModal)}
                                            >
                                                VERANDER NU JOUW LEVEN
                                            </Link>
                                        </MobileButton>
                                        <StyledLink to="/" onClick={() => setOpenModal(!openModal)}>
                                            <MenuItem>
                                                <MR_image marginright="40px">
                                                    <House />
                                                </MR_image>
                                                <Header_Link active={location.pathname === '/'}>
                                                    home
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <StyledLink
                                            to="/diensten"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image marginright="40px">
                                                    <Hand />
                                                </MR_image>
                                                <Header_Link
                                                    active={location.pathname === '/diensten/'}
                                                >
                                                    programmma
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <StyledLink
                                            to="/afspraak"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image margintop="7px" marginright="35px">
                                                    {typeof window !== 'undefined' ? (
                                                        <MaterialIcon
                                                            icon="calendar_month"
                                                            color="#1F4668"
                                                            size={30}
                                                        />
                                                    ) : null}
                                                </MR_image>
                                                <Header_Link
                                                    active={location.pathname === '/afspraak/'}
                                                >
                                                    MAAK EEN AFSPRAAK
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <StyledLink
                                            to="/over-ons"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image marginright="35px">
                                                    <Groups />
                                                </MR_image>
                                                <Header_Link
                                                    active={location.pathname === '/over-ons/'}
                                                >
                                                    over ons
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <StyledLink
                                            to="/faq"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image marginright="40px">
                                                    <Quiz />
                                                </MR_image>
                                                <Header_Link active={location.pathname === '/faq/'}>
                                                    faq
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <AnchorLink
                                            target="_blank"
                                            href="https://www.youtube.com/c/kjellfruytier"
                                        >
                                            <StyledLink onClick={() => setOpenModal(!openModal)}>
                                                <MenuItem>
                                                    <MR_image marginright="35px">
                                                        <Youtube />
                                                    </MR_image>
                                                    <Header_Link
                                                        active={location.pathname === '/fa/'}
                                                    >
                                                        youtube
                                                    </Header_Link>
                                                </MenuItem>
                                            </StyledLink>
                                        </AnchorLink>
                                        <StyledLink
                                            to="/nieuwsbrief"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image marginright="44px">
                                                    <Feed />
                                                </MR_image>

                                                <Header_Link
                                                    active={location.pathname === '/nieuwsbrief/'}
                                                >
                                                    nieuwsbrief
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <StyledLink
                                            to="/contact"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image marginright="44px">
                                                    <Contact />
                                                </MR_image>
                                                <Header_Link
                                                    active={location.pathname === '/contact/'}
                                                >
                                                    contact
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                        <StyledLink
                                            to="/testimonials"
                                            onClick={() => setOpenModal(!openModal)}
                                        >
                                            <MenuItem>
                                                <MR_image marginright="34px">
                                                    <Quote />
                                                </MR_image>
                                                <Header_Link
                                                    active={location.pathname === '/testimonials/'}
                                                >
                                                    testimonials
                                                </Header_Link>
                                            </MenuItem>
                                        </StyledLink>
                                    </MenuOptions>
                                </MobileModal>
                            ) : null}
                        </MobileHeaderWrapper>
                    </Wrapper>
                </Container>

                <NavLinks>
                    {navlinks.map((link, index) => (
                        <StyledLink key={index} to={link.route}>
                            <Header_Link active={location.pathname === link.route}>
                                {link.name}
                            </Header_Link>
                        </StyledLink>
                    ))}
                </NavLinks>
            </StickyHeader>
        </Suspense>
    );
};

export default Header;
