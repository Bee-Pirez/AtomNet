// styled.js
import styled from "styled-components";
import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const NavList = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Container = styled.header`
  position: fixed;
  width: 100%;
  background: ${(props) => (props.isMobileMenuOpen ? theme.violet : props.isOpen ? theme.violet : props.isScrolled ? theme.violet : "transparent")};
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  z-index: 3;
  padding: 2rem 3.75rem;
  padding-bottom: 6rem;
  transition: background 0.3s ease;

  @media (max-width: 873px) {
    height: ${(props) => (props.isMobileMenuOpen ? "100vh" : "auto")};
  }

  nav {
    max-width: 2000px;
    width: 100%;
  }
`;

export const MenuMobile = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  > a {
    > img {
      display: flex;
      width: 200px;
      max-height: 100%;
    }
  }

  @media (min-width: 874px) {
    display: none;
  }
`;

export const LinkList = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  >a {
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 1.24rem;
    font-weight: 500;
    position: relative;
    text-decoration: none;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(293deg, ${theme.lightBlue} 0%, ${theme.blue} 58.6%, ${theme.violetDarker} 101.37%);
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

export const ContainerMobile = styled.div`
  position: relative;
  top: 1;
  bottom: 10;
  left: 0;
  right: 0;
  z-index: 1;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  justify-content: space-between;
  gap: 5rem;

  ${LinkList} {
    width: 100%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    transition: 1s ease-out;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    padding: 5rem 0 8rem 0;
    border-bottom: 2px solid ${theme.lightBlue};

    >a {
      color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      font-size: 1.24rem;
      font-weight: 500;
      position: relative;
      text-decoration: none;
      width: 100%;

      &:hover {
        background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 0.08%, rgba(88, 130, 193, 0.00) 99.94%);
        box-shadow: 2px 4px 22px 0px #04060F;
      }
    }
  }

  > .exitButton {
    width: 100%;

    > button {
      width: 100%;
      background: none;
      border: none;
      color: white;
      font-size: 1.24rem;
      cursor: pointer;
      padding: 0.75rem;
      transition: background 0.5s ease;

      &:hover {
        background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 0.08%, rgba(88, 130, 193, 0.00) 99.94%);
        box-shadow: 2px 4px 22px 0px #04060F;
      }
    }
  }
`;

export const ContainerDesktop = styled.div`
  max-width: 2000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >a {
    > img {
      width: 200px;
      max-height: 100%;

      @media (max-width: 873px) {
        display: none;
        width: 100%;
        max-height: 100%;
      }
    }
  }

  > .exitButton {

    >button {
      background: none;
      border: none;
      color: white;
      font-size: 1.24rem; 
      cursor: pointer;
      transition: color 0.5s ease;

      &:hover {
        color: ${theme.lightBlue}
      }
    }

    @media (max-width: 873px) {
      display: none;
    }
  }

  > div {
    @media (max-width: 873px) {
      display: none;
    }
  }

  @media (max-width: 873px) {
    width: auto;
  }
`;