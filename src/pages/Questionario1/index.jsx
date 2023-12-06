import React, { useState } from 'react';
import { Container, FormSection, TittleForm, QuestionsForm } from "./styled";

import InsideHeader from "../../components/InsideHeader";
import Button from "../../components/Button";
import { Footer } from "../../components/Footer";
import QuestionToggle from "../../components/QuestionToggle";
import QuestionContent from "../../components/QuestionToggle/QuestionsContent";
import Question from "../../components/QuestionToggle/Question";

export function Questionario1() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Container>
      <InsideHeader></InsideHeader>
      <div className="containerContent">
        <h1>Questionário 1 anexo A</h1>
      </div>

      {step === 1 && (
        <FormSection>
          <TittleForm>
            <h2>Governança</h2>
            <Button type="primary" size="small" fill={true} onClick={nextStep}>
              Avançar
            </Button>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Políticas de segurança da informação">
              <QuestionContent description="A política de segurança da informação e as políticas específicas por tema devem ser definidas, aprovadas pela direção, publicadas, comunicadas e reconhecidas pelo pessoal pertinente e pelas partes interessadas, e analisadas criticamente em intervalos planejados e quando ocorrerem mudanças significativas.">
                <Question id="1_pergunta_1_A" letter="A." question="Existe uma política de segurança da informação na organização?"></Question>
                <Question id="1_pergunta_1_B" letter="B." question="Como são aprovadas e publicadas as políticas de PSI, e como são comunicadas aos funcionários e partes externas?"></Question>
                <Question id="1_pergunta_1_C" letter="C." question="As políticas são regularmente revisadas? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Papéis e responsabilidades pela segurança da informação">
              <QuestionContent description="Papéis e responsabilidades de segurança da informação devem ser definidas e alocadas de acordo com as necessidades da organização.">
                <Question id="1_pergunta_2_A"  letter="A." question="Existe um documento que identifica os responsáveis pelos ativos individuais e pelos processos de segurança específicos?"></Question>
                <Question id="1_pergunta_2_B" letter="B." question="Essa identificação é clara e objetiva, e esses documentos são revisados periodicamente?"></Question>
                <Question id="1_pergunta_2_C" letter="C." question="As responsabilidades foram adequadamente comunicadas às partes relevantes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segregação de funções">
              <QuestionContent description="Funções conflitantes e áreas de responsabilidade conflitantes devem ser segregadas.">
                <Question id="sf_pergunta_3_A"  letter="A." question="As funções conflitantes e áreas de responsabilidade são segregadas? A segregação deve ser implementada para diminuir as chances de alterações não autorizadas ou não intencionais e prevenir o uso indevido dos ativos de informação e serviços da organização."></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Responsabilidades da direção">
              <QuestionContent description="A direção deve requerer que todo o pessoal aplique a segurança da informação de acordo com a política da segurança da informação estabelecida, com as políticas especifícas por tema e com os procedimentos da organização">
                <Question id="1_pergunta_4_A"  letter="A." question="A Direção e demais gestores (de todos os níveis) estão comprometidos em orientar e encorajar funcionários, contratados e terceirizados a aplicarem a SI de acordo com o estabelecido nas políticas e procedimentos? "></Question>
                <Question id="1_pergunta_4_B"  letter="B." question="Como ocorre o encorajamento? É feito de forma periódica? "></Question>
                <Question id="1_pergunta_4_C"  letter="C." question="Esse processo está formalizado? Há a devida revisão periódica do documento?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Contato com autoridades">
              <QuestionContent description="A organização deve estabelecer e manter contato com as autoridades relevantes.">
                <Question id="1_pergunta_5_A"  letter="A." question="A organização estabelece e mantém contato com autoridades relevantes, documentando quando e por quem o contato deve ser feito?"></Question>
                <Question id="1_pergunta_5_B"  letter="B." question="Existe um processo para relatar incidentes de segurança em tempo hábil? Esses documentos são revisados periodicamente ou em caso de mudanças significativas nos processos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Contato com grupos de interesse especial">
              <QuestionContent description="A organização deve estabelecer e manter contato com grupos de interesse especial ou outros fóruns de especialistas em segurança e associações profissionais.">
                <Question id="1_pergunta_6_A"  letter="A." question="A organização mantém contatos com grupos especializados, fóruns ou associações profissionais de segurança da informação?"></Question>
                <Question id="1_pergunta_6_B"  letter="B." question="Esse processo é formalizado em um documento e é revisado periodicamente ou em caso de mudanças significativas nos processos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Uso aceitável de informações e outros ativos associados">
              <QuestionContent description="Regras para o uso aceitável e procedimentos para o manuseio de informações e outros ativos associados devem ser identificados, documentados e implementados. ">
                <Question id="1_pergunta_7_A"  letter="A." question="Existem regras e procedimentos para o uso e manuseio de informações e ativos associados?"></Question>
                <Question id="1_pergunta_7_B"  letter="B." question="Essas regras estão documentadas em uma política, e as pessoas com acesso às informações da organização são informadas sobre essa política?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Requisitos Legais, Estatutários, Regulamentares e Contratuais">
              <QuestionContent description="Os requisitos legais, estatutários, regulatórios e contratuais pertinentes à segurança da informação e à abordagem da organização para atender a esses requisitos devem ser identificados, documentados e atualizados.">
                <Question id="1_pergunta_8_A"  letter="A." question="A organização identificou e documentou todos os requisitos legislativos, regulamentares ou contratuais relevantes relacionados à segurança?"></Question>
                <Question id="1_pergunta_8_B"  letter="B." question="A conformidade está documentada e atualizada? Os controles criptográficos estão protegidos de acordo com todos os acordos, legislações e regulamentações relevantes pertinentes?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Documentação dos Procedimentos de Operação">
              <QuestionContent description="Os procedimentos de operação dos recursos de tratamento da informações devem ser documentados e disponibilizados ao pessoal que necessite deles.">
                <Question id="1_pergunta_9_A"  letter="A." question="Os procedimentos de operação são adequadamente documentados?"></Question>
                <Question id="1_pergunta_9_B"  letter="B." question="Os procedimentos são disponibilizados para todos os usuários que precisam fazer uso deles?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Mesa Limpa e Tela Limpa">
              <QuestionContent description="Regras de mesa limpa para documentos impressos e mídia de armazenamento removível e regras de tela limpa para os recursos de tratamento das informações devem ser definidas e adequadamente aplicadas. ">
                <Question id="1_pergunta_10_A"  letter="A." question="Existe uma política de mesa limpa e tela limpa para papéis e mídias de armazenamento removíveis e recursos de processamento da informação?"></Question>
                <Question id="1_pergunta_10_B"  letter="B." question="A política de mesa limpa e tela limpa está definida e implementada, e essas políticas são revisadas periodicamente?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança de Ativos fora das instalações da organização">
              <QuestionContent description="Os ativos fora das instalações da organização devem ser protegidos. ">
                <Question id="1_pergunta_11_A"  letter="A." question="Existe uma política de medidas de segurança para ativos que operem fora do local, levando em conta os diferentes riscos decorrentes do fato de se trabalhar fora das dependências da organização?"></Question>
                <Question id="1_pergunta_11_B"  letter="B." question="Essa política é amplamente comunicada?"></Question>
                <Question id="1_pergunta_11_C"  letter="C." question="Há conscientização aos colaboradores sobre como manusear os ativos fora das instalações da organização de maneira segura?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Dados | Exclusão de informações">
              <QuestionContent description="As informações armazenadas em sistemas de informação, dispositivos ou em qualquer outra mídia de armazenamento devem ser excluídas quando não forem mais necessárias.">
                <Question id="1_pergunta_12_A"  letter="A." question="As informações armazenadas em sistemas de informação, dispositivos ou em qualquer outra mídia de armazenamento são excluídas quando não são mais necessárias? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Dados | Uso de criptografia">
              <QuestionContent description="Regras para o uso efetivo da criptografia, incluindo o gerenciamento de chaves criptográfica, devem ser definidas e implementadas.">
                <Question id="1_pergunta_13_A"  letter="A." question="Existe uma política formalizada e implementada para uso de controles criptográficos para a proteção da segurança da informação? "></Question>
                <Question id="1_pergunta_13_B"  letter="B." question="Existe uma política formalizada para reger todo o ciclo de vida das chaves criptográficas, incluindo normas sobre seu uso e proteção?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Dados | Informações de Teste">
              <QuestionContent description="Informações de teste devem ser adequadamente selecionadas, protegidas e gerenciadas.">
                <Question id="1_pergunta_14_A"  letter="A." question="Existe um procedimento objetivo para selecionar dados de teste? "></Question>
                <Question id="1_pergunta_14_B"  letter="B." question="São geradas e armazenadas informações de teste e quem tem acesso a elas?"></Question>
                <Question id="1_pergunta_14_C"  letter="C." question="Há políticas de proteção de informações de teste, e essas políticas são monitoradas quanto à conformidade?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 2 && (
        <FormSection>
          <TittleForm>
            <h2>Threat Intelligence</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Inteligência de Ameaças">
              <QuestionContent description="As informações relacionadas a ameaças à segurança da informação devem ser coletadas e analisadas para produzir inteligência de ameaças.">
                <Question id="2_pergunta_1_A" letter="A." question="A organização coleta informações relacionadas a ameaças à segurança da informação e produz inteligência de ameaças?"></Question>
                <Question id="2_pergunta_1_B" letter="B." question="O procedimento de coleta/análise dessas informações está documentado e armazenado em algum local específico?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 3 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de projetos</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_1_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_1_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 4 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Ativos</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Inventário de Informações e outros ativos associados">
              <QuestionContent description="Um inventário de informações e outros ativos associados, incluindo proprietários, deve ser desenvolvido e mantido.">
                <Question id="4_pergunta_1_A" letter="A." question="Existe um inventário de informações e outros ativos, com proprietários claramente definidos?"></Question>
                <Question id="4_pergunta_1_B" letter="B." question="Os proprietários são notificados de suas responsabilidades, e o inventário é atualizado regularmente?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Devolução de ativos">
              <QuestionContent description="O pessoal e outras partes interessadas, conforme apropriado, devem devolver todos os ativos da organização em sua posse após a mudança ou o encerramento da contratação ou acordo.">
                <Question id="4_pergunta_2_A" letter="A." question="Existe um procedimento formal implementado para garantir que os funcionários e partes interessadas devolvam todos os ativos da organização que estejam em sua posse, em caso de mudança ou encerramento da contratação ou do acordo? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Direitos de propriedade intelectual">
              <QuestionContent description="A organização deve implementar procedimentos apropriados para proteger os direitos de propriedade intelectual.">
                <Question id="4_pergunta_3_A" letter="A." question="A organização mantém registro de todos os direitos de propriedade intelectual e do uso de produtos de software proprietários? "></Question>
                <Question id="4_pergunta_3_B" letter="B." question="A organização monitora o uso não licenciado de software? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Mídia de armazenamento">
              <QuestionContent description="As mídias de armazenamento devem ser gerenciadas por seu ciclo de vida de aquisição, uso, transporte e descarte de acordo com o esquema de classificação e manuseio da organização.">
                <Question id="4_pergunta_4_A" letter="A." question="Existe uma política e processo de gerenciamento de mídias removíveis em conformidade com a classificação da organização? "></Question>
                <Question id="4_pergunta_4_B" letter="B." question="Essas políticas e processos são comunicados a todos os funcionários que utilizam mídias removíveis?"></Question>
                <Question id="4_pergunta_4_C" letter="C." question="Há procedimentos formais para o descarte seguro, proteção durante o transporte, e verificações regulares da eficácia do processo?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_5_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_5_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 5 && (
        <FormSection>
          <TittleForm>
            <h2>Classificação da Informação</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Classificação das informações">
              <QuestionContent description="As informações devem ser classificadas de acordo com as necessidades de segurança da informação da organização com base na confidencialidade, integridade, disponibilidade e requisitos das partes interessadas relevantes.">
                <Question id="5_pergunta_1_A" letter="A." question="Existe uma política de gerenciamento da classificação da informação de acordo com as necessidades de segurança da informação da organização, com base na confidencialidade, integridade, disponibilidade e requisitos das partes interessadas relevantes?"></Question>
                <Question id="5_pergunta_1_B" letter="B." question="Existe um processo através do qual todas as informações podem ser adequadamente classificadas? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Rotulagem de informações">
              <QuestionContent description="Um conjunto adequado de procedimentos para rotulagem de informações deve ser desenvolvido e implementado de acordo com o esquema de classificação de informações adotado pela organização.">
                <Question id="5_pergunta_2_A" letter="A." question="Existe um conjunto formal e apropriado de procedimentos para rotular e tratar a informação que esteja de acordo com o esquema de classificação da informação adotado pela organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Transferência de informações">
              <QuestionContent description="Regras, procedimentos ou acordos de transferência de informações devem ser implementados para todos os tipos de recursos de transferência dentro da organização e entre a organização e outras partes.">
                <Question id="5_pergunta_3_A" letter="A." question="Existem regras, procedimentos ou acordos de transferência de informações implementados para todos os tipos de recursos de transferência dentro da organização e entre a organização e partes externas?"></Question>
                <Question id="5_pergunta_3_B" letter="B." question="Existem controles técnicos relevantes implementados para prevenir formas de transferência de dados não autorizadas? "></Question>
                <Question id="5_pergunta_3_C" letter="C." question="As políticas de segurança cobrem o uso de transferência da informação durante a utilização de sistemas de mensagens eletrônicas?  "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 6 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Acesso</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Controle de acesso">
              <QuestionContent description="Regras para controlar o acesso físico e lógico às informações e outros ativos associados devem ser estabelecidas e implementadas com base nos requisitos de segurança da informação e de negócios.">
                <Question id="6_pergunta_1_A" letter="A." question="Existe uma política documentada e estabelecida sobre controle de acesso físico e lógico às informações e a outros ativos associados, com base nos requisitos de segurança da informação e de negócios? A política de controle de acesso é apropriadamente comunicada a todos? "></Question>
                <Question id="6_pergunta_1_B" letter="B." question="Existem controles formais documentados e implementados para garantir que apenas os usuários que tenham sido especificamente autorizados recebam acesso às redes e aos serviços de rede, quando isto for necessário ao desempenho de suas funções? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de identidade">
              <QuestionContent description="O ciclo de vida completo das identidades deve ser gerenciado.">
                <Question id="6_pergunta_2_A" letter="A." question="Existe um processo de gestão de identidades de acesso que inclui identificação única dos usuários, fornecimento e revogação de acesso, e como esses processos são executados?"></Question>
                <Question id="6_pergunta_2_B" letter="B." question="Esse processo de gestão de identidade está documentado em uma política, e essa política é revisada periodicamente ou em caso de mudanças significativas no processo?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Informações de autenticação">
              <QuestionContent description="A alocação e o gestão de informações de autenticação devem ser controladas por uma gestão de processo, incluindo o aconselhar o pessoal sobre o manuseio adequado de informações de autenticação.">
                <Question id="6_pergunta_3_A" letter="A." question="Existe um processo de gerenciamento formal implementado para controlar a concessão de informação de autenticação secreta? "></Question>
                <Question id="6_pergunta_3_B" letter="B." question="Existe uma política documentada e devidamente comunicada a respeito das práticas da organização quanto ao uso e tratamento das informações de autenticação secretas? "></Question>
                <Question id="6_pergunta_3_C" letter="C." question="Os sistemas para gerenciamento de senha são interativos? Senhas complexas/de qualidade são requeridas? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Direitos de acesso">
              <QuestionContent description="Os direitos de acesso a informações e outros ativos associados devem ser provisionados, analisados criticamente, modificados e removidos de acordo com a política de tema específico e com as regras da organização para controle de acesso.">
                <Question id="6_pergunta_4_A" letter="A." question="Existe um processo formal de provisionamento de acesso de usuário que abrange todos os tipos de usuários e sistemas?"></Question>
                <Question id="6_pergunta_4_B" letter="B." question="Existe um procedimento para que os proprietários de ativos revejam periodicamente os direitos de acesso dos usuários, e a organização verifica a realização desse procedimento? "></Question>
                <Question id="6_pergunta_4_C" letter="C." question="Há um procedimento formal para retirar ou ajustar os direitos de acesso quando as atividades, contratos ou acordos se encerram ou mudam?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Ativos | Dispositivos de endpoint do usuário">
              <QuestionContent description="As informações armazenadas, tratados ou acessíveis por meio de dispositivos endpoint do usuário devem ser protegidas.">
                <Question id="6_pergunta_5_A" letter="A." question="Existe uma política de uso de dispositivos móveis documentada e aprovada pela direção?"></Question>
                <Question id="6_pergunta_5_B" letter="B." question="A política aborda os riscos adicionais associados ao uso de dispositivos móveis e inclui diretrizes para proteção de equipamentos não monitorados? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Direitos de acesso privilegiado">
              <QuestionContent description="A atribuição e o uso de direitos de acesso privilegiado devem ser restritos e gerenciados.">
                <Question id="6_pergunta_6_A" letter="A." question="Como as contas de acesso privilegiado são geridas e controladas separadamente? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Restrição de acesso à informação">
              <QuestionContent description="O acesso às informações e outros ativos associados deve ser restrito de acordo com a política específica por tema sobre controle de acesso.">
                <Question id="6_pergunta_7_A" letter="A." question="O acesso à informação e às funções dos sistemas de aplicações são restritos de acordo com a política de controle de acesso? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Acesso ao código-fonte">
              <QuestionContent description="O acesso de leitura e escrita ao código-fonte, ferramentas de desenvolvimento e bibliotecas de software deve ser adequadamente gerenciados.">
                <Question id="6_pergunta_8_A" letter="A." question="Por quais meios o acesso ao código-fonte de programas, incluindo o do Sistema de Controle de Acesso, é protegido e gerenciado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Autenticação Segura">
              <QuestionContent description="Tecnologias e procedimentos de autenticação seguros devem ser implementados com base em restrições de acesso à informação e à política específica por tema de controle de acesso.">
                <Question id="6_pergunta_9_A" letter="A." question="Nos casos em que for requerido pela Política de Controle de Acesso, o acesso aos sistemas e aplicações é controlado por um procedimento seguro de entrada no sistema (log-on)? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 7 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Fornecedores</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Segurança da informação nas relações com fornecedores">
              <QuestionContent description="Os processos e procedimentos devem ser definidos e implementados para gerenciar a segurança da informação e os riscos associados com uso dos produtos ou serviços dos fornecedores.">
                <Question id="7_pergunta_1_A" letter="A." question="A segurança da informação está incluída nos contratos estabelecidos com fornecedores e prestadores de serviço, de maneira a mitigar os riscos associados decorrentes do acesso daqueles aos ativos da organização? "></Question>
                <Question id="7_pergunta_1_B" letter="B." question="Existe uma gestão de risco em toda a organização para a relação com os fornecedores?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores | Abordagem da segurança da informação nos contratos com fornecedores">
              <QuestionContent description="Requisitos relevantes de segurança da informação devem ser estabelecidos e acordados com cada fornecedor com base no tipo de relacionamento com o fornecedor.">
                <Question id="7_pergunta_2_A" letter="A." question="Existem requisitos de segurança da informação acordados com os fornecedores?  Esses requisitos são adequadamente documentados?"></Question>
                <Question id="7_pergunta_2_A" letter="B." question="O acesso dos fornecedores a ativos de informação e infraestrutura de TI é controlado e monitorado?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores | Gestão da segurança da informação na  cadeia de fornecimento de TIC">
              <QuestionContent description="Os processos e procedimentos devem ser definidos e implementados para gerenciar os riscos de segurança da informação associados à cadeia de fornecimento de produtos e serviços de TIC.">
                <Question id="7_pergunta_3_A" letter="A." question="Os acordos com fornecedores incluem requisitos para contemplar a segurança da informação ao longo de toda a cadeia de fornecimento de serviços e produtos de tecnologia da informação e comunicação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 8 && (
        <FormSection>
          <TittleForm>
            <h2>Fornecedores de Nuvem</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Gestão Serviços em Nuvem | Segurança da informação para uso de serviços em nuvem">
              <QuestionContent description="Os processos de aquisição, uso, gestão e saída de serviços em nuvem devem ser estabelecidos de acordo com os requisitos de segurança da informação da organização.">
                <Question id="8_pergunta_1_A" letter="A." question="Existe uma política sobre o uso de serviços em nuvem que estabeleça os processos de aquisição, uso, gestão e saída de serviços em nuvem de acordo com os requisitos de segurança da informação da organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

    {step === 9 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Incidentes</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Gestão de Incidentes | Planejamento e preparação da gestão de incidentes de Incidentes de Segurança da Informação">
              <QuestionContent description="A organização deve planejar e se preparar para gerenciar incidentes de segurança da informação, definindo, estabelecendo e comunicando processos, papéis e responsabilidades de gestão de incidentes de segurança da informação.">
                <Question id="9_pergunta_1_A" letter="A." question="As responsabilidades e procedimentos de gestão estão claramente identificadas e documentadas nos processos de gestão de risco, de modo a possibilitarem respostas rápidas, efetivas e ordenadas no caso de ocorrência de algum incidente?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Eventos | Avaliação e decisão sobre Eventos de Segurança da Informação">
              <QuestionContent description="A organização deve avaliar os eventos de segurança da informação e decidir se categorizados como incidentes de segurança da informação.">
                <Question id="9_pergunta_2_A" letter="A." question="Existe um procedimento para garantir que os eventos de segurança da informação sejam devidamente avaliados, categorizados e classificados? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Incidentes | Resposta a incidentes de Segurança da Informação">
              <QuestionContent description="Os incidentes de segurança da informação devem ser respondidos de acordo com os procedimentos documentados.">
                <Question id="9_pergunta_3_A" letter="A." question="Existe um procedimento para reportar incidentes de segurança da informação que reflita a classificação e gravidade dos eventos? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Incidentes | Aprendizado com Incidentes de Segurança da Informação">
              <QuestionContent description="O conhecimento adquirido em incidentes de segurança da informação deve ser usado para fortalecer e melhorar os controles de segurança da informação.">
                <Question id="9_pergunta_4_A" letter="A." question="Existe um procedimento ou framework que permita que a organização aprenda com os incidentes de segurança da informação e reduza o impacto e a probabilidade da ocorrência de eventos futuros? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Eventos | Coleta de Evidências">
              <QuestionContent description="A organização deve estabelecer e implementar procedimentos para a identificação, coleta, aquisição e preservação de evidências relacionadas a eventos de segurança da informação.">
                <Question id="9_pergunta_5_A" letter="A." question="Existe uma política com procedimentos definidos para identificação, coleta, aquisição e preservação de evidências relacionadas a eventos de segurança da informação?"></Question>
                <Question id="9_pergunta_5_B" letter="B." question="Na ocorrência de um incidente de segurança da informação, os dados relevantes são coletados de maneira a permitir que sejam usados como evidências? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Relato de eventos de segurança da informação">
              <QuestionContent description="A organização deve fornecer um mecanismo para que as pessoas relatem eventos de segurança da informação observados ou suspeitos por meio de canais apropriados em tempo hábil.">
                <Question id="9_pergunta_6_A" letter="A." question="Existe um procedimento para notificar em tempo hábil os eventos de segurança da informação? "></Question>
                <Question id="9_pergunta_6_B" letter="B." question="Existe um processo para notificar fragilidades de segurança da informação identificadas? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

    {step === 10 && (
        <FormSection>
          <TittleForm>
            <h2>Recuperação de Desastres</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Segurança da informação durante a disrupção">
              <QuestionContent description="A organização deve planejar como manter a segurança da informação em um nível apropriado durante a disrupção.">
                <Question id="10_pergunta_1_A" letter="A." question="A Segurança da Informação está integrada aos planos de continuidade da organização? "></Question>
                <Question id="10_pergunta_1_B" letter="B." question="A organização possui processos documentados para garantir a continuidade dos serviços de segurança da informação durante situações adversas, e os planos e controles de continuidade são validados e certificados periodicamente?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Continuidade de Negócios | Prontidão de TIC para Continuidade de Negócios">
              <QuestionContent description="A prontidão de TIC deve ser planejada, implementada, mantida e testada com base nos objetivos de continuidade de negócios e nos requisitos de continuidade de TIC.">
                <Question id="10_pergunta_2_A" letter="A." question="Como a TIC (Tecnologia da Informação e Comunicação) pode ser planejada, implementada, mantida e testada de forma a atender aos objetivos de continuidade de negócios e aos requisitos de continuidade da TIC?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 11 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Logs</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Proteção de registros">
              <QuestionContent description="Os registros devem ser protegidos contra perdas, destruição, falsificação, acesso não autorizado e liberação não autorizada.">
                <Question id="11_pergunta_1_A" letter="A." question="Os registros estão protegidos contra perda, destruição, falsificação e acesso ou liberação não autorizados de acordo com os requisitos legais, regulamentares, contratuais e de negócio? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Log">
              <QuestionContent description="Logs que registram atividades, exceções, falhas e outros eventos relevantes devem ser produzidos, armazenados, protegidos e analisados.">
                <Question id="11_pergunta_2_A" letter="A." question="A organização produz, mantém e revisa regularmente registros adequados de eventos de segurança da informação?"></Question>
                <Question id="11_pergunta_2_B" letter="B." question="As informações de registro de eventos (logs) são adequadamente protegidas contra adulteração e acesso não autorizado, e os registros de eventos são devidamente registrados, protegidos, armazenados e revisados?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 12 && (
        <FormSection>
          <TittleForm>
            <h2>Privacidade</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Privacidade e Proteção de DP">
              <QuestionContent description="A organização deve identificar e atender aos requisitos relativos à preservação da privacidade e à proteção de DP, de acordo com as leis e regulamentos aplicáveis e os requisitos contratuais.">
                <Question id="12_pergunta_1_A" letter="A." question="Os dados pessoais são identificados e apropriadamente qualificados? "></Question>
                <Question id="12_pergunta_1_B" letter="B." question="Os dados pessoais estão protegidos de acordo com a legislação relevante? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Dados | Mascaramento de dados">
              <QuestionContent description="O mascaramento de dados deve ser usado de acordo com a política específica por tema da organização sobre controle de acesso e outros requisitos específicos por tema relacionados e requisitos de negócios, levando em consideração a legislação aplicável.">
                <Question id="12_pergunta_2_A" letter="A." question="Como o mascaramento de dados pode ser realizado de forma a cumprir as políticas específicas da organização sobre controle de acesso, requisitos de negócios e requisitos específicos por tema, além de considerar as leis aplicáveis?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 13 && (
        <FormSection>
          <TittleForm>
            <h2>Auditoria</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Análise crítica independente da Segurança da Informação">
              <QuestionContent description="A abordagem da organização para gerenciar a segurança da informação e sua implementação, incluindo pessoas, processos e tecnologias, deve ser analisada criticamente, de forma independente, a intervalos planejados ou quando ocorrerem mudanças significativas.">
                <Question id="13_pergunta_1_A" letter="A." question="O enfoque da organização para gerenciar a segurança da informação está sujeita a uma análise crítica independente e realizada em intervalos de tempo regulares ou quando da concorrência de mudanças significativas? "></Question>
                <Question id="13_pergunta_1_B" letter="B." question="A implementação dos controles de segurança está sujeita a uma análise crítica independente em intervalos regulares ou quando da ocorrência de mudanças significativas? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Compliance com Políticas, Regras e normas de Segurança da Informação">
              <QuestionContent description="O conpliance da política de segurança da informação da organização, políticas, regras e normas de temas especifícos deve ser analisado criticamente a intervalos regulares.">
                <Question id="13_pergunta_2_A" letter="A." question="A organização instrui seus gestores a avaliarem regularmente a conformidade dos procedimentos e processamento de informações com as normas, requisitos e políticas de segurança aplicáveis em suas áreas de responsabilidade?"></Question>
                <Question id="13_pergunta_2_B" letter="B." question="Existem registros que demonstram as revisões realizadas pelos gestores?"></Question>
                <Question id="13_pergunta_2_C" letter="C." question="A organização realiza análises regulares de conformidade técnica em seus sistemas de informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Sistema Operacional | Proteção de Sistemas de Informação durante testes de auditoria">
              <QuestionContent description="Testes de auditoria e outras atividades de garantia envolvendo avaliação de sistemas operacionais devem ser planejados e acordados entre o testador e a gestão apropriada.">
                <Question id="13_pergunta_3_A" letter="A." question="A organização realiza testes de auditoria?"></Question>
                <Question id="13_pergunta_3_B" letter="B." question="Os sistemas operacionais de Segurança da Informação estão sujeitos a auditorias?"></Question>
                <Question id="13_pergunta_3_C" letter="C." question="O procedimento de auditoria foi estabelecido de modo a assegurar que a interrupção do negócio seja minimizada?"></Question>
                <Question id="13_pergunta_3_D" letter="D." question="Os testes de auditoria e e outras atividades de garantia são planejados e acordados entre o testador e a gestão apropriada?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 14 && (
        <FormSection>
          <TittleForm>
            <h2>RH</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Seleção">
              <QuestionContent description="Verificações de antecedentes de todos os candidatos a serem contratados devem ser realizadas antes de ingressarem na organização e de modo contínuo, de acordo com as leis, os regulamentos e a ética aplicáveis, e devem ser  proporcionais aos requisitos do negócios, à classificação das informações a serem acessadas e aos riscos percebidos.">
                <Question id="14_pergunta_1_A" letter="A." question="As verificações de histórico são realizadas para todos os novos candidatos a emprego?"></Question>
                <Question id="14_pergunta_1_B" letter="B." question="Essas verificações são aprovadas pela direção? As verificações estão em conformidade com as leis, regulamentações e ética relevantes?"></Question>
                <Question id="14_pergunta_1_C" letter="C." question="Os níveis de verificação exigidos são suportados por avaliações de risco de negócios?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Processo disciplinar">
              <QuestionContent description="Um processo disciplinar deve ser formalizado e comunicado, para tomar ações contra o pessoal e outras partes interessadas relevantes que tenham cometido uma violação da política de segurança da informação.">
                <Question id="14_pergunta_2_A" letter="A." question="Existe um processo disciplinar formal implementado que permite à organização tomar medidas contra os funcionários que tenham cometido uma violação de segurança da informação? "></Question>
                <Question id="14_pergunta_2_B" letter="B." question="Esse processo disciplinar é devidamente comunicado a todos os funcionários? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 15 && (
        <FormSection>
          <TittleForm>
            <h2>Gente e Cultura</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Termos e Condições de Contratação">
              <QuestionContent description="Os contratos trabalhistas devem declarar as responsabilidades do pessoal e da organização para a segurança da informação.">
                <Question id="15_pergunta_1_A" letter="A." question="É solicitado a todos os usuários funcionários, contratados e terceirizados que assinem acordos de confidencialidade e não divulgação? "></Question>
                <Question id="15_pergunta_1_B" letter="B." question="Os contratos de trabalho e de serviço incluem especificamente a necessidade de proteger as informações de negócio? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 16 && (
        <FormSection>
          <TittleForm>
            <h2>Treinamento</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Conscientização, educação e treinamento em segurança da informação">
              <QuestionContent description="O pessoal da organização e as partes interessadas relevantes devem receber treinamento, educação e conscientização em segurança da informação apropriados e atualizações regulares da política de  segurança da informação da organização, políticas e procedimentos específicos por tema, pertinentes para as suas funções. ">
                <Question id="16_pergunta_1_A" letter="A." question="Todos os funcionários internos e, quando pertinente, as partes externas passam por treinamento, educação e conscientização sobre segurança da informação e são regularmente atualizados sobre as políticas e procedimentos organizacionais relevantes para o desempenho de suas funções? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 17 && (
        <FormSection>
          <TittleForm>
            <h2>jurídico</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Responsabilidades após encerramento ou mudança da contratação">
              <QuestionContent description="As responsabilidades e deveres de segurança da informação que permanecem válidas após o encerramento ou a mudança da contratação devem ser definidas, aplicadas e comunicadas ao pessoal e a outras partes interessadas pertinentes. ">
                <Question id="17_pergunta_1_A" letter="A." question="Existe um procedimento documentado para o encerramento ou mudança de contratação?"></Question>
                <Question id="17_pergunta_1_B" letter="B." question="As responsabilidades de segurança da informação que permanecem válidas após o encerramento ou mudança de contratação são comunicadas e verificadas pela organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Acordos de confidencialidade ou não divulgação">
              <QuestionContent description="Acordos de confidencialidade ou não divulgação refletindo as necessidades da organização para a proteção de informações devem ser identificados, documentados, analisados criticamente em intervalos regulares e assinados pelo pessoal e por outras partes interessadas pertinentes. ">
                <Question id="17_pergunta_2_A" letter="A." question="Os requisitos para garantir a confidencialidade e a não divulgação de informações foram identificados de acordo com as necessidades da organização?"></Question>
                <Question id="17_pergunta_2_B" letter="B." question="Funcionários internos e partes externas assinam acordos de confidencialidade ou não divulgação, e os registros desses acordos são mantidos e revisados regularmente?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

    {step === 18 && (
        <FormSection>
          <TittleForm>
            <h2>Acesso Remoto</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Trabalho remoto">
              <QuestionContent description="Medidas de segurança devem ser implementadas quando as pessoal estiverem trabalhando remotamente para proteger as informações acessadas, tratadas ou armazenadas fora das instalações da organização.">
                <Question id="18_pergunta_1_A" letter="A." question="Existe uma política de trabalho remoto aprovada pela direção?"></Question>
                <Question id="18_pergunta_1_B" letter="B." question="Há um processo definido para o acesso de trabalhadores remotos, incluindo a distribuição de equipamentos e orientações para a proteção de ativos e informações fora das instalações da organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 19 && (
        <FormSection>
          <TittleForm>
            <h2>Infraestrutura Física</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Perímetros de Segurança Física">
              <QuestionContent description="Perímetros de segurança devem ser definidos e usados para proteger áreas que contenham informações e outros ativos associados.">
                <Question id="19_pergunta_1_A" letter="A." question="Existe um perímetro de segurança definido e usados para proteger tanto as áreas que contenham as instalações de processamento da informação como as informações críticas ou sensíveis? "></Question>
                <Question id="19_pergunta_1_B" letter="B." question="As áreas de informações sensíveis ou críticas são segregadas e adequadamente controladas?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Entrada Física">
              <QuestionContent description="As áreas seguras devem ser protegidas por controles de entrada e pontos de acesso apropriados.">
                <Question id="19_pergunta_2_A" letter="A." question="As áreas seguras possuem sistemas de controle de entrada física adequados para assegurar que apenas pessoal autorizado tenha acesso permitido?"></Question>
                <Question id="19_pergunta_2_B" letter="B." question="Existem áreas separadas para entrega e carregamento e outros pontos em que pessoas não autorizadas possam entrar nas instalações?"></Question>
                <Question id="19_pergunta_2_C" letter="C." question="O acesso a essas áreas é controlado?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança de Escritórios, Salas e Instalações">
              <QuestionContent description="Segurança física para escritórios, salas e instalações deve ser projetada e implementada.">
                <Question id="19_pergunta_3_A" letter="A." question="As instalações foram projetadas e configuradas de acordo com boas práticas de segurança da informação?"></Question>
                <Question id="19_pergunta_3_B" letter="B." question="Existem processos de manutenção de segurança implementados (como trancamento e mesas limpas), e esses processos são amplamente divulgados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Monitoramento de Segurança Física">
              <QuestionContent description="As instalações devem ser monitoradas continuamente para acesso físico não autorizado.">
                <Question id="19_pergunta_4_A" letter="A." question="As instalações são monitoradas continuamente para detectar e impedir o acesso físico não autorizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Proteção contra ameaças físicas e ambientais">
              <QuestionContent description="Proteção contra ameaças físicas e ambientais, como desastres naturais e outras ameaças físicas intencionais ou não intencionais à infraestrutura, deve ser projetada e implementada.">
                <Question id="19_pergunta_5_A" letter="A." question="As medidas de proteção física para prevenir desastres naturais, ataques maliciosos ou acidentes foram projetados e devidamente aplicados? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Trabalhando em Áreas Seguras">
              <QuestionContent description="Medidas de segurança para trabalhar em áreas seguras devem ser projetadas e implementadas.">
                <Question id="19_pergunta_6_A" letter="A." question="Existem áreas seguras na organização?"></Question>
                <Question id="19_pergunta_6_B" letter="B." question="Caso existam, essas áreas seguras possuem políticas e processos adequados, que são aplicados e monitorados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Localização e Proteção de Equipamentos">
              <QuestionContent description="O equipamento devem ser posicionados com segurança e proteção.">
                <Question id="19_pergunta_7_A" letter="A." question="Os perigos ambientais são identificados e considerados quando os locais para colocação dos equipamentos são escolhidos?"></Question>
                <Question id="19_pergunta_7_B" letter="B." question="Os riscos de acesso não autorizado são considerados ao posicionar o equipamento? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Serviços de infraestrutura">
              <QuestionContent description="As instalações de tratamento de informações devem ser protegidas contra falhas de energia e outras disrupções causadas por falhas nos serviços de infraestrutura. ">
                <Question id="19_pergunta_8_A" letter="A." question="Existe um sistema UPS/NoBreak ou gerador de backup? "></Question>
                <Question id="19_pergunta_8_B" letter="B." question="Eles são testados dentro de um prazo regulares e adequados? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança de Cabeamento">
              <QuestionContent description="Os cabos que transportam energia ou dados ou que sustentam serviços de informação, devem ser protegidos contra interceptação, interferência ou danos.">
                <Question id="19_pergunta_9_A" letter="A." question="Foram realizadas avaliações de risco sobre a localização do cabeamento de energia e de telecomunicações que transporta dados ou dá suporte aos serviços de informações? "></Question>
                <Question id="19_pergunta_9_B" letter="B." question="O cabeamento está localizado de modo que fique protegido de interferências, interceptações ou danos? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 20 && (
        <FormSection>
          <TittleForm>
            <h2>Manutenção/suporte</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Manutenção do Equipamentos">
              <QuestionContent description="O equipamento deve ser mantido corretamente para assegurar a disponibilidade, integridade e confidencialidade das informações.">
                <Question id="20_pergunta_1_A" letter="A." question="Existe um cronograma rigoroso de manutenção correta de equipamentos, a fim de assegurar sua disponibilidade e integridade permanente? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 21 && (
        <FormSection>
          <TittleForm>
            <h2>Desenvolvimento</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Gestão de Capacidade">
              <QuestionContent description="O uso de recursos deve ser monitorado e ajustado de acordo com os requisitos atuais e esperados de capacidade. ">
                <Question id="21_pergunta_1_A" letter="A." question="Existe um processo de gestão de capacidade implementado de modo a garantir o desempenho requerido do sistema?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Proteção contra Malware">
              <QuestionContent description="Proteção contra malware deve ser implementada e apoiada pela conscientização adequada do usuário.">
                <Question id="21_pergunta_2_A" letter="A." question="A organização implementou controles de detecção de malware e processos para prevenir a propagação de malware?"></Question>
                <Question id="21_pergunta_2_B" letter="B." question="A organização possui um processo de recuperação de infecção por malware e um programa de conscientização sobre malware para os usuários?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Configuração">
              <QuestionContent description="As configurações, incluindo configurações de segurança, de hardware, software, serviços e redes, devem ser estabelecidas, documentadas, implementadas, monitoradas e analisadas criticamente. ">
                <Question id="21_pergunta_3_A" letter="A." question="Existem processos e ferramentas estabelecidos, documentados e implementados para impor as configurações definidas para hardware, software, serviços, redes e sistemas?"></Question>
                <Question id="21_pergunta_3_B" letter="B." question="As configurações são monitoradas e analisadas criticamente de forma regular para estarem sempre atualizadas? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Sincronização do Relógio">
              <QuestionContent description="Os relógios dos sistemas de tratamento de informações utilizados pela organização devem ser sincronizados com as fontes de tempo aprovadas.">
                <Question id="21_pergunta_4_A" letter="A." question="Todos os relógios de sistemas de processamento relevante, tanto os que estejam dentro da organização quanto dentro do domínio de segurança, estão sincronizados com uma fonte de tempo precisa?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Programas | Uso de Programas Utilitários Privilegiados">
              <QuestionContent description="O uso de programas utilitários que podem ser capazes de substituir os controles do sistema e as aplicações deve ser restrito e rigorosamente controlado.">
                <Question id="21_pergunta_5_A" letter="A." question="O uso de programas utilitários privilegiados (capazes de sobrepor os controles dos sistemas e aplicações) são restritos e monitorados? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Instalação de Software em Sistemas Operacionais">
              <QuestionContent description="Procedimentos e medidas devem ser implementados para gerenciar com segurança a instalação de software em sistemas operacionais.">
                <Question id="21_pergunta_6_A" letter="A." question="Existe um procedimento formal implementado para controlar a instalação de software em sistemas operacionais?  "></Question>
                <Question id="21_pergunta_6_B" letter="B." question="Há procedimentos implementados que definam critérios para restringir a instalação de software pelos usuários? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Redes | Segurança de Redes">
              <QuestionContent description="Redes e dispositivos de rede devem ser protegidos, gerenciados e controlados para proteger as informações em sistemas e aplicações. ">
                <Question id="21_pergunta_7_A" letter="A." question="Existe um procedimento de gestão e controle de redes?"></Question>
                <Question id="21_pergunta_7_B" letter="B." question="Foram estabelecidas responsabilidades e processos apropriados para garantir a segurança da informação? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Redes | Segurança dos Serviços de rede">
              <QuestionContent description="Mecanismos de segurança, níveis de serviço e requisitos de serviços de rede devem ser identificados, implementados e monitorados.">
                <Question id="21_pergunta_8_A" letter="A." question="A organização implementou mecanismos de gestão de risco que identificam serviços de rede, sua segurança, níveis de serviço e requisitos de gerenciamento?"></Question>
                <Question id="21_pergunta_8_B" letter="B." question="A segurança é obrigatória em acordos e contratos com prestadores de serviços, e os SLAs relacionados à segurança são obrigatórios e cumpridos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Redes | Segregação de Redes">
              <QuestionContent description="Grupos de serviços de informação, usuários e sistemas de informação devem ser segregados nas redes da organização.">
                <Question id="21_pergunta_9_A" letter="A." question="A topologia de rede estabelece a segregação de redes para diferentes tarefas, grupos de serviços de informação, usuários e sistemas? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Desenvolvimento | Ciclo de vida de desenvolvimento seguro">
              <QuestionContent description="Regras para o desenvolvimento seguro de software e sistemas devem ser estabelecidas e aplicadas.">
                <Question id="21_pergunta_10_A" letter="A." question="Existe uma política implementada de desenvolvimento seguro de softwares e sistemas? "></Question>
                <Question id="21_pergunta_10_B" letter="B." question="Existe um procedimento de avaliação dos controles de segurança de desenvolvimento seguro?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title=" Desenvolvimento | Requisitos de segurança da aplicação">
              <QuestionContent description="Requisitos de segurança da informação devem ser identificados, especificados e aprovados ao desenvolver ou adquirir aplicações.">
                <Question id="21_pergunta_11_A" letter="A." question="Os serviços de aplicação que enviam informações através redes públicas são adequadamente protegidos contra atividades fraudulentas, disputas contratuais, divulgações não autorizados e modificações não autorizadas? "></Question>
                <Question id="21_pergunta_11_B" letter="B." question="Existem controles implementados para evitar transmissão incompleta, erros de roteamento, alterações não autorizadas de mensagem, divulgação não autorizada, duplicação ou representação de mensagem não autorizada? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Desenvolvimento | Princípios de Arquitetura e engenharia de sistemas seguros">
              <QuestionContent description="Princípios de engenharia de sistemas seguros devem ser estabelecidos, documentados, mantidos e aplicados a qualquer atividade de desenvolvimento de sistemas de informação.">
                <Question id="21_pergunta_12_A" letter="A." question="A organização estabeleceu princípios para projetar sistemas seguros? "></Question>
                <Question id="21_pergunta_12_B" letter="B." question="Esses princípios são documentados, mantidos e adequadamente aplicados quando da implementação de sistemas de informação? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Desenvolvimento | Codificação Segura">
              <QuestionContent description="Princípios de codificação segura devem ser aplicados ao desenvolvimento de software.">
                <Question id="21_pergunta_13_A" letter="A." question="Os princípios de codificação segura são aplicados ao desenvolvimento de software?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Desenvolvimento | Testes de Segurança em Desenvolvimento e aceitação">
              <QuestionContent description="Processos de teste de segurança devem ser definidos e implementados no ciclo de vida do desenvolvimento.">
                <Question id="21_pergunta_14_A" letter="A." question="São realizados testes de funcionalidade de segurança adequados durante o processo de desenvolvimento de sistemas? "></Question>
                <Question id="21_pergunta_14_B" letter="B." question="Existe um programa de testes de aceitação de novos sistemas / aplicações de informação, atualizações e novas versões?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Desenvolvimento | Desenvolvimento terceirizado">
              <QuestionContent description="A organização deve dirigir, monitorar e analisar criticamente as atividades relacionadas à terceirização de desenvolvimento de sistemas.">
                <Question id="21_pergunta_15_A" letter="A." question="Existe um procedimento de supervisão e monitoramento nos casos em que o desenvolvimento de sistemas é terceirizado? "></Question>
                <Question id="21_pergunta_15_B" letter="B." question="Os códigos desenvolvidos externamente estão sujeitos a revisão de segurança antes de serem implementados?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title=" Separação de ambientes de desenvolvimento, teste e produção">
              <QuestionContent description="Ambientes de desenvolvimento, teste e produção devem ser separados e protegidos.">
                <Question id="21_pergunta_16_A" letter="A." question="A organização estabelece a separação de ambientes de desenvolvimento, teste e produção, de modo a reduzir os riscos de acesos ou modificações não autorizadas no ambiente de produção?"></Question>
                <Question id="21_pergunta_16_B" letter="B." question="Foram estabelecidos ambientes seguros de desenvolvimento?"></Question>
                <Question id="21_pergunta_16_C" letter="C." question="Todos os projetos utilizam adequadamente o ambiente de desenvolvimento seguro durante o ciclo de vida de desenvolvimento do sistema?  "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 22 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Vulnerabilidades</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Gestão de Vulnerabilidades Técnicas">
              <QuestionContent description="Informações sobre vulnerabilidades técnicas dos sistemas de informação em uso devem ser obtidas; a exposição da organização a tais vulnerabilidades deve ser avaliada e medidas apropriadas devem ser tomadas.">
                <Question id="22_pergunta_1_A" letter="A." question="A organização tem acesso a informações atualizadas sobre vulnerabilidades técnicas em seus sistemas de informação?"></Question>
                <Question id="22_pergunta_1_B" letter="B." question="Existe um procedimento para avaliar riscos e reagir a novas vulnerabilidades, e a organização realiza análises regulares de conformidade técnica em seus sistemas de informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 23 && (
        <FormSection>
          <TittleForm>
            <h2>DLP</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Vazamento | Prevenção de Vazamento de Dados">
              <QuestionContent description="As medidas de prevenção de vazamento de dados devem ser aplicadas a sistemas, redes e quaisquer outros dispositivos que tratem, armazenem ou transmitam informações sensíveis. ">
                <Question id="23_pergunta_1_A" letter="A." question="As medidas de prevenção de vazamento de dados são aplicadas todos os sistemas, redes e quaisquer outros dispositivos que tratem, armazenem ou transmitam informações sensíveis na organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 24 && (
        <FormSection>
          <TittleForm>
            <h2>Backup</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Backup de informações">
              <QuestionContent description="Cópias de backup de informações, software e sistemas devem ser mantidas e testadas regularmente de acordo com a política especifica por tema acordada sobre backup.">
                <Question id="24_pergunta_1_A" letter="A." question="Existe uma política de cópias de segurança implementada, e essa política está em conformidade com frameworks e normas relevantes?"></Question>
                <Question id="24_pergunta_1_B" letter="B." question="As cópias de segurança são realizadas de acordo com a política estabelecida e são testadas?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 25 && (
        <FormSection>
          <TittleForm>
            <h2>Continuidade de Negócios</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Continuidade de Negócios | Redundância dos recursos de tratamento de informações">
              <QuestionContent description="Os recursos de tratamento de informações devem ser implementados com redundância suficiente para atender aos requisitos de disponibilidade.">
                <Question id="25_pergunta_1_A" letter="A." question="Os recursos disponíveis de processamento de informações têm redundância suficiente para atender aos requisitos de disponibilidade da organização? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 26 && (
        <FormSection>
          <TittleForm>
            <h2>Firewall/Proxy</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} onClick={nextStep}>
                Avançar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Monitoramento | Atividades de Monitoramento">
              <QuestionContent description="As redes, sistemas e aplicativos devem ser monitorados por comportamento anômalos e ações apropriadas, tomadas para avaliar potenciais incidentes de segurança da informação.">
                <Question id="26_pergunta_1_A" letter="A." question="Existe algum processo documentado e implementado sobre o monitoramento das redes, sistemas e aplicações para detectar comportamentos anômalos e possíveis incidentes de segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 27 && (
        <FormSection>
          <TittleForm>
            <h2>Gestão de Mudanças</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true}>
                Enviar
              </Button>
            </div>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="Monitoramento | Atividades de Monitoramento">
              <QuestionContent description="Mudanças nos recursos de tratamento de informações e sistemas de informação devem estar sujeitas a procedimentos de gestão de mudanças. ">
                <Question id="27_pergunta_1_A" letter="A." question="As mudanças no ambiente de tecnologia da informação são identificadas, avaliadas e autorizadas?"></Question>
                <Question id="27_pergunta_1_B" letter="B." question="São implementadas as mudanças com controle de segurança?"></Question>
                <Question id="27_pergunta_1_C" letter="C." question="São realizados testes, documentação e revisões após a implementação de mudanças?"></Question>
                <Question id="27_pergunta_1_D" letter="D." question=" A política de gestão de mudanças é gerenciada , incluindo comunicação, avaliação de riscos, monitoramento e gestão de mudanças não planejadas?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      <Footer></Footer>
    </Container>
  );
}