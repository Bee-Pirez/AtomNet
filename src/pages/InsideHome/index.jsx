// app.jsx
import { useNavigate } from "react-router-dom";
import QuizCard from "../../components/QuizCard";
import { Container, CardSection } from "./styled";
import Button from "../../components/Button";

import quiz1 from "../../assets/quiz1.svg";
import quiz2 from "../../assets/quiz2.svg";
import InsideHeader from "../../components/InsideHeader";
import { Footer } from "../../components/Footer";

export function InsideHome() {

  const navigate = useNavigate();

  function handleQuiz1(e) {
    e.preventDefault();
    navigate("/Questionario1");
  }

  function handleQuiz2(e) {
    e.preventDefault();
    navigate("/Questionario2");
  }


  return (
    <Container>
      <InsideHeader></InsideHeader>
      <div className="containerContent">
        <h2>Olá, empresa!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever.
        </p>
      </div>
      <CardSection>
        <QuizCard
          title="Questionário 1"
          description="Responda seus questionários"
          imageUrl={quiz1}
          
        ><Button type="primary" size="small" fill={false} onClick={handleQuiz1}>Responder Questionário 1</Button></QuizCard>
        <QuizCard
          title="Questionário 2"
          description="Responda seus questionários"
          imageUrl={quiz2}
        ><Button type="primary" size="small" fill={false} onClick={handleQuiz2}>Responder Questionário 2</Button></QuizCard>
      </CardSection>
      <Footer></Footer>
    </Container>
  );
}
