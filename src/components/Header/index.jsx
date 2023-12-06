// header.jsx
import React, { useState, useEffect, useCallback } from 'react';
import logoAtom from '../../assets/logoAtom.svg';
import { Container, MenuMobile, ContainerMobile, ContainerDesktop, NavList } from "./styled";
import { Divide as Hamburger } from 'hamburger-react';
import { Link, useNavigate } from "react-router-dom";

export function Header({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 873); // Verifica se a tela está em um dispositivo móvel
    const navigate = useNavigate();


    const handleResize = useCallback(() => {
        // Atualiza o estado isMobile quando a tela for redimensionada
        setIsMobile(window.innerWidth <= 873);
        // Fecha o menu se a tela for aumentada
        if (window.innerWidth > 873) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <Container isMobileMenuOpen={isOpen}>
            <nav>
                <MenuMobile>
                    <Link to="/">
                        <img src={logoAtom} alt="logo" />
                    </Link> 
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </MenuMobile>
                {
                    !isMobile || isOpen === false ? (
                        <ContainerDesktop>
                            <Link to="/">
                                <img src={logoAtom} alt="logo" />
                            </Link> 
                            <NavList>{children}</NavList>
                        </ContainerDesktop>
                    ) : (
                        <ContainerMobile isOpen={isOpen}>
                            <NavList isOpen={isOpen}>{children}</NavList>
                        </ContainerMobile>
                    )
                }
            </nav>
        </Container>
    )
}

export default Header;