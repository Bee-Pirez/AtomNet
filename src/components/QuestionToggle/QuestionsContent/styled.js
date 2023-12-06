import styled from 'styled-components';

import { defaultTheme } from "../../../theme/index";

const theme = defaultTheme;


export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 1.01%, rgba(88, 130, 193, 0.25) 100%);
  padding: 2.5rem 3.75rem;
  gap: 2rem;

  >p{
    display: flex;
    align-items: center;
    text-align: center;
  }

  >.contentQuestions{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
  }

  @media (max-width: 784px) {
    >p {
      text-align: start;
    }  

  }
`;

export const UploadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  margin-top: 10px;
`;

export const StyledLabel = styled.label`
  font-size: ${theme.fontBase_p};
  color: ${theme.lightBlue};
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: 1px solid ${theme.white};;
  border-radius: 0.375rem;
  padding: 0.5rem;
  font-size: 14px;
  color: #c7c7c7;
  background-color: ${theme.violetLight};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;