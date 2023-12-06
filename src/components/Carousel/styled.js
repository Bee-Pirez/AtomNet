import styled, { keyframes, css } from 'styled-components';

import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

const smoothScale = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.15); }
`;


export const CarouselContainer = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  z-index: 0;

  
`;

export const SliderItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 2000ms ease;
`;

export const SliderBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.active && css`animation: ${smoothScale} 7s linear forwards;`}
`;

export const SliderReveal = styled.div`
  text-align: center;
  color: white;
  z-index: 2;

  h1, p {
    margin: 0;
    transform: translateY(30px);
    opacity: ${(props) => (props.active ? 1 : 1)};
    transition: opacity 0.5s ease; /* Add this line for smooth transition */
  }

  > h1 {
    font-size: ${theme.fontBase_h1};
  }

  > h2 {
    font-size: ${theme.fontBase_h2};
  }

  > p {
    font-size: ${theme.fontBase_p};
  }
`;
