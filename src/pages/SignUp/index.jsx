import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { Container, FormSection } from "./styled";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Bubble from "../../components/Bubble";
import { Footer } from "../../components/Footer";

export function SignUp() {
  const navigate = useNavigate()

  function handleSignIn(e) {
    e.preventDefault()
    console.log('Navigating to /SignIn');
    navigate('/SignIn')
  }

  function handleSignUp(e) {
    e.preventDefault()
    console.log('Navigating to /SignIn');
    navigate('/SignUp')
  }

  function handleEnter(e) {
    e.preventDefault()
    navigate('/InsideHome')
  }


  return (
    <Container>
      <Header>
        <Button type="primary" size="small" fill={false} onClick={handleSignIn}>Entrar</Button>
        <Button type="primary" size="small" fill={true} onClick={handleSignUp}>Cadastrar</Button>
      </Header>
      <FormSection>
        <div className="sectionForm">
          <div>
            <h2>Cadastro</h2>
            <form>
              <fieldset>
                <div className="inputDiv">
                  <div className="inputContent">
                    <Input name="Email" prefix="Enter your email" type="email" />
                    <Input name="Password" prefix="Enter your password" type="password" />
                    <Input name="Email" prefix="Enter your email" type="email" />
                    <Input name="Password" prefix="Enter your password" type="password" />
                  </div>
                  <div className="inputContent">
                    <Input name="Email" prefix="Enter your email" type="email" />
                    <Input name="Password" prefix="Enter your password" type="password" />
                    <Input name="Email" prefix="Enter your email" type="email" />
                    <Input name="Password" prefix="Enter your password" type="password" />
                  </div>
                </div>
                <div className="content">
                  <Button type="secondary" size="large" color="violet"  fill={true} onClick={handleEnter}>
                    Entrar
                  </Button>
                </div>
              </fieldset>
              <p>
                Já tem uma conta?
                <a onClick={handleSignIn}>
                  Clique aqui
                </a>
              </p>
            </form>
          </div>
        </div>
      </FormSection>
      <Footer></Footer>
      <Bubble></Bubble>
    </Container>
  );
}