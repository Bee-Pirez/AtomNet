import styled from 'styled-components';

import { defaultTheme } from '../../../theme/index';

const theme = defaultTheme;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;

`;

export const DropdownButton = styled.button`
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 1.24rem;
  font-weight: 500;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(293deg, ${theme.lightBlue} 0%, ${theme.blue} 58.6%, ${theme.violetDarker} 101.37%);
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  @media (max-width: 873px) {
    width: 100%;

    &:hover {
      background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 0.08%, rgba(88, 130, 193, 0.00) 99.94%);
      box-shadow: 2px 4px 22px 0px #04060F;
    }
  }
`;

export const ArrowIcon = styled.span`
  margin-left: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease-in-out;
`;

export const DropdownList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.a`
  padding: 10px;
  text-decoration: none;
  color: white;
  display: block;
  font-size: 1.24rem;

  > a {
    text-decoration: none;
    color: white;
    display: block;
  }

  > a:hover {
    background: linear-gradient(90deg, rgba(88, 130, 193, 0.25) 0.08%, rgba(88, 130, 193, 0.00) 99.94%);
    box-shadow: 2px 4px 22px 0px #04060F;
  }
`;


