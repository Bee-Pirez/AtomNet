import styled from 'styled-components';

import { defaultTheme } from "../../../theme/index";

const theme = defaultTheme;


export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 2px red;
  background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 1.01%, rgba(88, 130, 193, 0.25) 100%);
  padding: 2.5rem 2rem;
  gap: 2rem;



  >.contentQuestions{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

  }
`;