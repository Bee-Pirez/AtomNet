// styled.js
import styled from 'styled-components';
import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  gap: 10px;
  border-radius: 0.5rem;
  


  h3,
  p {
    opacity: 0;
    transition: 0.4s;
  }

  &:hover {
    h3,
    p {
      opacity: 1;
      z-index: 1;
    }

    .medias {
      opacity: 1;
      z-index: 1;
    }
  }


`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: filter 0.4s, transform 0.4s;

  &:hover {
    filter: blur(5px);
    transform: scale(1.1);
  }
`;

export const SocialButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 0px 6px 3px #00000027;
  }
`;

export const LinkedinButton = styled(SocialButton)`
  background-color: #0077b5;
  box-shadow: 2px 12px 10px 0px rgba(0, 0, 0, 0.25);
  color: white;

  &:hover {
    
    color: #0077b5;
  
  }
`;

