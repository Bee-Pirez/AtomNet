import React from 'react';
import { CardContainer, Content, BackgroundCard } from "./styled";

import quiz1 from '../../assets/quiz1.svg';

const QuizCard = ({ title, description, imageUrl, children}) => {
  return (
    <CardContainer>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <img src={imageUrl} alt="Card" />
      </Content>
      <BackgroundCard className="backgroundCard"></BackgroundCard>
    </CardContainer>
  );
};

export default QuizCard;
