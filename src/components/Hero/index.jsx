// hero.jsx
import React from 'react';
import { Container, TextContainer,  } from "./styled";

const Hero = ({ imageSrc, title, description, children }) => {
  return (
    <Container>
      <img src={imageSrc} alt="Header Image" />
      <TextContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </TextContainer>
    </Container>
  );
};

export default Hero;

