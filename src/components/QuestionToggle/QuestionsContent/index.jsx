// QuestionContent.jsx
import { QuestionContainer, UploadContainer, StyledLabel, StyledInput } from './styled';

const QuestionContent = ({ description, children }) => {

  return (
    <QuestionContainer>
      <p>{description}</p>
      <div className='contentQuestions'>
        {children}
      </div>
      <UploadContainer>
        <StyledLabel>Adicionar uma evidência</StyledLabel>
        <StyledInput type="file" id="evidencia" />
      </UploadContainer>
    </QuestionContainer>
  );
};

export default QuestionContent;
