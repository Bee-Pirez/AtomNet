// Header.jsx
import React, { useState, useEffect, useCallback } from "react";
import logoAtom from "../../assets/logoAtom.svg";
import { Container, MenuMobile, ContainerMobile, ContainerDesktop, NavList } from "./styled";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 873);
  const [isScrolled, setIsScrolled] = useState(false);

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
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
            <Link to="/">
              <img src={logoAtom} alt="logo" />
            </Link>
            <NavList>{children}</NavList>
          </ContainerDesktop>
        ) : (
          <ContainerMobile isOpen={isOpen}>
            <NavList isOpen={isOpen}>{children}</NavList>
          </ContainerMobile>
        )}
      </nav>
    </Container>
  );
}

export default Header;
