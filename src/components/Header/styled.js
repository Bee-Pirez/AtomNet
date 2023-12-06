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
  background: ${(props) => (props.isMobileMenuOpen ? theme.violet : "transparent")};
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  z-index: 3;
  padding: 2rem 3.75rem;

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
  display: none;
  
  >a {
    >img{
      display: flex;
      width: 200px;
      max-height: 100%;
    }
  }

  @media (max-width: 873px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }
`;

export const ContainerMobile = styled.div`
  

  ${Container} {
    background-color: ${(props) => (props.isOpen ? theme.violetLight : "transparent")};
  } 

  ${NavList} {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    height: 100vh;
    transition: 1s ease-out;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  ${NavList}:nth-child(1) {
    transition: 1s 0.4s;
  }
  ${NavList}:nth-child(2) {
    transition: 1s 0.8s;
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
  
  ${NavList} {
    display: flex;

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
