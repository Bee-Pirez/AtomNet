import styled from 'styled-components';

import { defaultTheme } from "../../../theme/index";

const theme = defaultTheme;


export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  padding: 1rem 1rem;
  gap: 2rem;

  >div{
    
  }
  
  >.contentInput{
    display: flex;
    gap: 2rem;
    font-size: ${theme.fontBase_p};
  }
`;