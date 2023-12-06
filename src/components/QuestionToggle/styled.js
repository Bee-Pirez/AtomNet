// Dropdown/styled.js

import styled, { keyframes } from 'styled-components';

import { defaultTheme } from "../../theme/index";

const theme = defaultTheme;

const fadeIn = keyframes`
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: auto;
  }
`;

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const DropdownTitle = styled.h3`
  width: 100%;
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  border-top: 3px solid var(--foundation-light-blue-normal, #03B9E1);
  background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 1.01%, rgba(88, 130, 193, 0.25) 100%);
  padding: 2.5rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${theme.fontBase_h3};


  svg {
    margin-left: 0.5rem; /* Espaço entre o texto e o ícone */
  }
`;

export const DropdownContent = styled.div`
  animation: ${({ isOpen }) => (isOpen ? fadeIn : 'none')} 0.3s ease-out;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  transition: max-height 0.3s ease-out;

  background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 1.01%, rgba(88, 130, 193, 0.25) 100%);
`;

// Adicione os estilos necessários para o conteúdo do DropdownContent



