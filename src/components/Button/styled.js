// styled.js
import styled, { css, keyframes } from 'styled-components';
import { defaultTheme } from '../../theme/index';

const getSizeValue = (size) => {
  switch (size) {
    case 'small':
      return '0.5rem 2rem';
    case 'medium':
      return '0.5rem 5.5rem';
    case 'large':
      return '1rem 1rem';
    default:
      return '10px 20px';
  }
};

const gradientAnimation = keyframes`
0% {
  background-position: 0% 50%;
}

50% {
  background-position: 100% 50%;
}

100% {
  background-position: 0% 50%;
}
`;

const getButtonStyles = ({ type, size, fill, color }) => {
  const theme = defaultTheme;

  const commonStyles = css`
    padding: ${getSizeValue(size)};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    
  `;

  const primaryFillTrueStyles = css`
    background: linear-gradient(293deg, ${theme.lightBlue} 0%, ${theme.blue} 58.6%, ${theme.violetDarker} 101.37%);
    background-size: 800% 400%;
    padding: ${getSizeValue(size)};
    display: inline-block;
    font-size: 18px;
    color: white;
    border: 3px solid;
    border-image: linear-gradient(to right, ${theme.lightBlue}, ${theme.blue}) 20;
    transition: all .5s ease-in-out;
    animation: ${gradientAnimation} 10s infinite cubic-bezier(.62, .28, .23, .99) both;
    cursor: pointer;

  &:hover {
    animation: ${gradientAnimation} 10s infinite;
    border-image: linear-gradient(to right, ${theme.blue}, ${theme.lightBlue}) 20;
  }
  `;

  const primaryFillFalseStyles = css`
    background: transparent;
    color: ${theme.white};
    border: 3px solid;
    border-image: linear-gradient(to right, ${theme.lightBlue}, ${theme.blue}) 20;
    font-size: 18px;
    padding: ${getSizeValue(size)};
    transition: all .5s ease-in-out;
    cursor: pointer;

    &:hover {
      border-image: linear-gradient(to right, ${theme.blue}, ${theme.lightBlue}) 20;
    
    }
  `;

  switch (type) {
    case 'primary':
      return fill ? primaryFillTrueStyles : primaryFillFalseStyles;
    case 'secondary':
      const buttonColor = color === 'violet' ? theme.violet : color === 'white' ? theme.white : theme.violet;
      return css`
        ${commonStyles}
        color: ${fill ? theme.white : buttonColor};
        padding: ${getSizeValue(size)};
        background: ${fill ? buttonColor : 'transparent'};
        border: 3px solid ${buttonColor};
        font-size: 18px;
        transition: all .5s ease-in-out;
        cursor: pointer;
      `;
    default:
      return '';
  }
};

export const StyledButton = styled.button`
  ${(props) => getButtonStyles(props)}

  &:hover {
    ${(props) => (props.type === 'secondary' ? getButtonStyles({ ...props, fill: !props.fill }) : '')}
  }
`;

