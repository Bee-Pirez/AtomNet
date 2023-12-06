import styled from 'styled-components';

import { defaultTheme } from "../../../theme/index";

const theme = defaultTheme;


export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  padding: 1rem 0;
  gap: 2rem;

  @media (max-width: 784px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;

  }

  >div{
    
  }
  
  >.contentInput{
    display: flex;
    gap: 2rem;

    >label{
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      >input{
        width: 2rem
      }
    }
    
  }
`;