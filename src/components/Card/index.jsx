// Card/index.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Container } from "./styled";

const Card = ({ title, description }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faShieldAlt} />
      <h4>{title}</h4>
      <p>{description}</p>
    </Container>
  );
};

export default Card;
