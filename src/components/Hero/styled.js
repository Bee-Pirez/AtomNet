// styled.js
import styled from 'styled-components';

import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  flex-wrap: wrap; 

  > img {
    width: 30%;
  }

  @media (max-width: 873px) {
    flex-direction: column-reverse;
    gap: 5rem;

    >img {
      width: 100%;
    }

  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;

  @media (max-width: 873px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    

  }

  > h2{
    font-size: ${theme.fontBase_h2};
  }

  > p {
    font-size: ${theme.fontBase_p};
  }
`;

