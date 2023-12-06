// app.jsx
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import MembersCard from "../../components/MembersCard";
import member1 from "../../assets/member1.jpg";
import member2 from "../../assets/member2.jpg";
import member3 from "../../assets/member3.jpg";
import member4 from "../../assets/member4.jpg";
import member5 from "../../assets/member5.jpg";

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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem.Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem.Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem."
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
          <div class="CTAContent">
            <h2>Faça seu cadastro</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever.
            </p>
            <Button type="secondary" size="small" fill={true} onClick={handleSignUp}>
              Cadastrar
            </Button>
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
            name="Andre Barreto"
            description="Descrição 1"
            linkedinLink="https://www.linkedin.com/in/andre-barreto-"
            imageSrc={member1}
          />
          <MembersCard
            name="Felipe Barboza"
            description="Descrição 2"
            linkedinLink="https://www.linkedin.com/in/felipe-barboza-a8555b221/"
            imageSrc={member2}
          />
          <MembersCard
            name="Fernando Ritt"
            description="Descrição 3"
            linkedinLink="https://www.linkedin.com/in/fernando-ritt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            imageSrc={member3}
          />
          <MembersCard
            name="Matheus Augusto"
            description="Descrição 4"
            linkedinLink="https://www.linkedin.com/in/matheus-augusto-290ab8238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            imageSrc={member4}
          />
          <MembersCard
            name="Vinícius de Barros"
            description="Descrição 2"
            linkedinLink="https://www.linkedin.com/in/vin%C3%ADcius-de-barros-fernandes-96a8341b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            imageSrc={member5}
          />
        </CardsSection>
      </MembersSection>
      <Footer></Footer>
    </Container>
  );
}
