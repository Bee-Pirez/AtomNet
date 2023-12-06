import styled from "styled-components";
import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.violetDarker};
  color: white;

  > h1 {
    font-size: ${theme.fontBase_h1};
  }

  > h2 {
    font-size: ${theme.fontBase_h2};
  }

  > h3 {
    font-size: ${theme.fontBase_h3};
  }

  > h4 {
    font-size: ${theme.fontBase_h4};
  }

  > p {
    font-size: ${theme.fontBase_p};
  }
`;

export const EnterpriseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding:  5rem 3.75rem;
`;

export const BenefitsSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:  5rem 3.75rem;

  >section {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: start;
    gap: 4.5rem;

    > div {
      display: flex;
      flex-direction: column;
      width: 80%;
      gap: 1rem;
      
      > h2 {
        font-size:${theme.fontBase_h2};
      }

      > p {
        font-size:${theme.fontBase_p};
      }
    
    }
    
    > ul {
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }

  }

  > img {
    width: 40%;
    border-radius: 1rem;
  }

  @media (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5rem;

    >section {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 4.5rem;
      align-items: center;


      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      > ul {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

  }

    > img {
      width: 100%;
    }

  }
`;

export const CTASection= styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding:  5.375rem 3.75rem;
  background-color: ${theme.violet};

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    
      
    .CTAContent {
      width: 30%;
      z-index: 4;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;

      > h2 {
        font-size: ${theme.fontBase_h2};
      }

      > p {
        font-size: ${theme.fontBase_p};
      }
    }
      

    > img {
      z-index: 2;
      width: 30%
      

      }

      @media (max-width: 820px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        >div{
          width: 100%;
          text-align: center;

        }
        
        .CTAContent{
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        >img {
          width: 70%;
        }

    }
    
    }
    

`;


export const MembersSection= styled.section`
  display: flex;
  flex-direction: column;
  padding:  5rem 3.75rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 4.5rem;
    gap: 1rem;

    > h2 {
      font-size:${theme.fontBase_h2};
    }

    > p {
      font-size:${theme.fontBase_p};
    }
  }

`;

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
