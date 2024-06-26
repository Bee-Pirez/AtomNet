import styled from 'styled-components';

import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  max-width: 60rem;
  height: 20rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 10px;
  transition: all 2.5s cubic-bezier(0.23, 1, 0.320, 1); 
  background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 0.08%, rgba(88, 130, 193, 0.00) 99.94%);
  box-shadow: 2px 4px 22px 0px #04060F;

  
  
  flex-grow: 1;
  flex-basis: 500px;
  overflow: hidden;

  &:hover .backgroundCard {
    width: 200%;
    height: 100%;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  color: #e8e8e8;
  padding: 20px;
  position: relative; 
  z-index: 1; 

  > h2 {
    font-size: ${theme.fontBase_h2};
  }

  > p {
    font-size: ${theme.fontBase_p};
  }

  > img {
    position: absolute;
    width: 270px;
    height: auto;
    bottom: 0;
    left: 62%;
    padding: 3%;
    
  }
`;

export const BackgroundCard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  border-radius: 50% 0 0 50%;
  background-color: ${theme.blue};
  transition: all 2s cubic-bezier(0.23, 1, 0.320, 1); /* Ajustei o tempo da transição */
`;