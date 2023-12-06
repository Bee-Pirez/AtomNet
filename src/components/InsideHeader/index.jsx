// InsideHeader.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoAtom from '../../assets/logoAtom.svg';
import { Container, MenuMobile, ContainerMobile, ContainerDesktop, LinkList, NavList } from "./styled";
import { Divide as Hamburger } from 'hamburger-react';
import { Link, useNavigate } from "react-router-dom";

import LinkDropdown from "../../components/InsideHeader/LinkDropdown";

function InsideHeader({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 873);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    function handleLeaving(e) {
        e.preventDefault()
        navigate('/')
    }

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 873);
        if (window.innerWidth > 873) {
            setIsOpen(false);
        }
    }, []);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 0);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleResize, handleScroll]);

    return (
        <Container isMobileMenuOpen={isOpen} isScrolled={isScrolled} isOpen={isOpen}>
            <nav>
                <MenuMobile>
                    <Link to="/">
                        <img src={logoAtom} alt="logo" />
                    </Link>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </MenuMobile>
                {!isMobile || isOpen === false ? (
                    <ContainerDesktop>
                        <Link to="/InsideHome">
                            <img src={logoAtom} alt="logo" />
                        </Link>
                        <LinkList>
                            <Link to="/InsideHome">Home</Link>
                            <LinkDropdown items={[{ label: 'Anexo A', link: '/Questionario1' }, { label: 'Requisitos', link: '/Questionario2' }]} firstLinkLabel="Dropdown" />
                            <Link to="/link2">Empresa</Link>
                        </LinkList>
                        <div className='exitButton'><button onClick={handleLeaving}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sair
                        </button>
                        </div>
                    </ContainerDesktop>
                ) : (
                    <ContainerMobile isOpen={isOpen}>
                        <LinkList>
                            <Link to="/InsideHome">Home</Link>
                            <LinkDropdown items={[{ label: 'Anexo A', link: '/Questionario1' }, { label: 'Requisitos', link: '/Questionario2' }]} firstLinkLabel="Dropdown" />
                            <Link>Empresa</Link>
                        </LinkList>
                        <div className='exitButton'><button className='exitButtonBtn'>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sair
                        </button>
                        </div>
                    </ContainerMobile>
                )}
            </nav>
        </Container>
    )
}

export default InsideHeader;
