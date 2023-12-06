import styled from "styled-components";

import { defaultTheme } from "../../theme/index";
const theme = defaultTheme;


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.violetDarker};
  color: white;
  position: relative;
  overflow: hidden;


`;


export const FormSection= styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding:  5.375rem 2rem 0;
  padding-top: 10rem;

  > .sectionForm {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

  
    >div {
      width: 82.5rem;
      height: 42rem;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      padding: 2rem;
      gap: 2rem;

      border-radius: 2.5rem;
      border: 3px solid rgba(88, 130, 193, 0.49);
      background: rgba(88, 130, 193, 0.28);
      backdrop-filter: blur(12.5px);

      @media (max-width: 837px) {
        height: 100%;
      }

      > h2 {
        font-size: ${theme.fontBase_h2};
      }
    
      >form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        >fieldset{
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border: none;

          >.inputDiv{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            gap: 3rem;

            @media (max-width: 837px) {
              flex-wrap: wrap;
            }
            

            >.inputContent{
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            
            }

          }



          >.content{
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
        }

        >p{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          font-size: ${theme.fontBase_p};

          >a{
            font-size: ${theme.fontBase_p};
            color: ${theme.violet};
            cursor: pointer;
          }
        }

      }

    }
  }

  
`;