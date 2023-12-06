// app.jsx
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import MembersCard from "../../components/MembersCard";
import members from "../../assets/members.jpg";
import {
  Container,
  MembersSection,
  CardsSection,
  EnterpriseSection,
  BenefitsSection,
  CTASection,
} from "./styled";
import Carousel from "../../components/Carousel";

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import Hero from "../../components/Hero";
import enterprise from "../../assets/enterprise.svg";
import benefits from "../../assets/benefits.svg";
import computer from "../../assets/computer.svg";

import Card from "../../components/Card";
import Bubble from "../../components/Bubble";
import { Footer } from "../../components/Footer";

export function Home() {
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    console.log("Navigating to /SignIn");
    navigate("/SignIn");
  }

  function handleSignUp(e) {
    e.preventDefault();
    console.log("Navigating to /SignIn");
    navigate("/SignUp");
  }

  const slides = [
    {
      image: slider1,
      title: "Atom Net",
      description: "Alçando organizações à excelência em segurança cibernética",
    },
    {
      image: slider2,
      title: "Maturidade em segurança",
      description: "Impulsionando negócios com Atom net",
    },
    {
      image: slider3,
      title: "Título do Slide 2",
      description: "Descrição do Slide 2",
    },
  ];

  return (
    <Container>
      <Header>
        <Button type="primary" size="small" fill={false} onClick={handleSignIn}>
          Entrar
        </Button>
        <Button type="primary" size="small" fill={true} onClick={handleSignUp}>
          Cadastrar
        </Button>
      </Header>
      <div>
        {/* Other components */}
        <Carousel slides={slides} />
      </div>
      <EnterpriseSection>
        <Hero
          imageSrc={enterprise}
          title="Sobre a empresa"
          description="O projeto em questão não apenas visa oferecer uma avaliação do nível de maturidade em Segurança da Informação, mas também traz consigo benefícios tangíveis para as organizações."
        ></Hero>
      </EnterpriseSection>
      <BenefitsSection>
        <section>
          <div>
            <h2>Segurança Fortalecida, Governança Aprimorada</h2>
            <p>
              O projeto em questão não apenas visa oferecer uma avaliação do
              nível de maturidade em Segurança da Informação, mas também traz
              consigo benefícios tangíveis para as organizações.
            </p>
          </div>
          <ul>
            <Card
              title="Benefício 1"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem."
            />
            <Card
              title="Benefício 2"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem."
            />
          </ul>
        </section>
        <img src={benefits} alt="homem digitando no computador" />
      </BenefitsSection>

      <CTASection>
        <div>
          <img src={computer} alt="computador e segurança" />
          <div>
            <h2>Title 2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever.
            </p>
          </div>
        </div>
        <Bubble></Bubble>
      </CTASection>

      <MembersSection>
        <div>
          <h2>CONHEÇA NOSSA EQUIPE</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industrys standard dummy text
            ever.
          </p>
        </div>
        <CardsSection>
          {/* Usando o componente MembersCard */}
          <MembersCard
            name="Nome Completo 1"
            description="Descrição 1"
            linkedinLink="https://www.linkedin.com/in/user1"
            imageSrc={members}
          />
          <MembersCard
            name="Nome Completo 2"
            description="Descrição 2"
            linkedinLink="https://www.linkedin.com/in/user2"
            imageSrc={members}
          />
          <MembersCard
            name="Nome Completo 3"
            description="Descrição 3"
            linkedinLink="https://www.linkedin.com/in/user2"
            imageSrc={members}
          />
          <MembersCard
            name="Nome Completo 4"
            description="Descrição 4"
            linkedinLink="https://www.linkedin.com/in/user2"
            imageSrc={members}
          />
          <MembersCard
            name="Nome Completo 2"
            description="Descrição 2"
            linkedinLink="https://www.linkedin.com/in/user2"
            imageSrc={members}
          />
        </CardsSection>
      </MembersSection>
      <Footer></Footer>
    </Container>
  );
}
