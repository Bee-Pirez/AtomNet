import styled from "styled-components";
import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.violetDarker};
  color: white;
  
  

  >.containerContent{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding:  2.5rem 3.75rem;
    padding-top: 14rem;

    > h2 {
      font-size: ${theme.fontBase_h1};
    }

    > p {
      font-size: ${theme.fontBase_p};
    }
  }
`;

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding:  2.5rem 3.75rem;
`;