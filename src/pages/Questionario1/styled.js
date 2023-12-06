import styled from "styled-components";
import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.violetDarker};
  color: white;


  > p {
    font-size: ${theme.fontBase_p};
  }

  >div{
    padding:  15rem 0 0 3.75rem;
    
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding:  7rem 3.75rem;
`;

export const TittleForm = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > h2 {
    font-size: ${theme.fontBase_h2};
  }
  >div{
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;

    >div{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const QuestionsForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;