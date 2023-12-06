// styled.js
import styled from 'styled-components';

import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const Container = styled.li`
  display: flex;
  width: 18.75rem;
  height: 18.75rem;
  padding: 2rem;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 0.08%, rgba(88, 130, 193, 0.00) 99.94%);
  box-shadow: 2px 4px 22px 0px #04060F; 
  gap: 1rem;
  border-radius: 0.5rem;

  
  > h4{
    font-size:${theme.fontBase_h4};
  }

  > p {
    font-size: ${theme.fontBase_p};
  }
  


`;

