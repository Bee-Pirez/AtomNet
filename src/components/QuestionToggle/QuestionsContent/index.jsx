// QuestionContent.jsx
import { QuestionContainer } from './styled';

const QuestionContent = ({ description, children }) => {

  return (
    <QuestionContainer>
      <p>{description}</p>
      <div className='contentQuestions'>
        {children}
      </div>
      <div></div>
    </QuestionContainer>
  );
};

export default QuestionContent;
