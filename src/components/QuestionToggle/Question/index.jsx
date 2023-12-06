// Question.jsx
import { QuestionContainer } from './styled';

const Question = ({ letter, question, id }) => {
  return (
    <QuestionContainer>
      <div className='contentTittles'>
        <h4>{letter}</h4>
        <p>{question}</p>
      </div>
      <div className='contentInput'>
        <label>
          <input id={id} type="radio" name={`Etapa_${id}`} value="sim" />
          Sim
        </label>
        <label>
          <input id={id} type="radio" name={`Etapa_${id}`} value="nao" />
          Não
        </label>
      </div>
    </QuestionContainer>
  );
};

export default Question ;