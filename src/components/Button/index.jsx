import React from 'react';
import { StyledButton } from './styled';

const Button = ({ type, size, fill, color, children, onClick }) => {
  return (
    <StyledButton type={type} size={size} fill={fill} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

