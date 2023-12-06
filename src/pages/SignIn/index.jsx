import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { Container, FormSection } from "./styled";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Bubble from "../../components/Bubble";
import { Footer } from "../../components/Footer";

export function SignIn() {
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
            <h2>Login</h2>
            <form>
              <fieldset>
                <div className="inputDiv">
                  <Input name="Email" prefix="Enter your email" type="email" />
                  <Input name="Password" prefix="Enter your password" type="password" />
                </div>
                <div className="content">
                  <div>
                    <label style={{ color: 'white' }}>
                      <input style={{ marginRight: '10px', transform: 'scale(1.5)' }} type="checkbox" />
                      Manter conectado
                    </label>
                    <a>Esqueci a senha</a>
                  </div>
                  <Button type="secondary" size="large" color="violet"  fill={true} onClick={handleEnter}>
                    Entrar
                  </Button>
                </div>
              </fieldset>
              <p>
                Ainda não tem uma conta?
                <a onClick={handleSignUp}>
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