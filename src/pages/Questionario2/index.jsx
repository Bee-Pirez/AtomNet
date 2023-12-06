import React, { useState } from 'react';
import { Container, FormSection, TittleForm, QuestionsForm } from "./styled";

import InsideHeader from "../../components/InsideHeader";
import Button from "../../components/Button";
import { Footer } from "../../components/Footer";
import QuestionToggle from "../../components/QuestionToggle";
import QuestionContent from "../../components/QuestionToggle/QuestionsContent";
import Question from "../../components/QuestionToggle/Question";

export function Questionario2() {
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
        <h1>Questionário 2 - Requisitos</h1>
      </div>

      {step === 1 && (
        <FormSection>
          <TittleForm>
            <h2>Contexto da organização</h2>
            <Button type="primary" size="small" fill={true} onClick={nextStep}>
              Avançar
            </Button>
          </TittleForm>
          <QuestionsForm>
            <QuestionToggle title="4.1 - Entendendo a organização e seu contexto">
              <QuestionContent description="A organização deve determinar as questões internas e externas que são relevantes para o seu propósito e que afetam sua capacidade de alcançar os resultados pretendidos do seu sistema de gestão da segurança da informação. ">
                <Question id="1_pergunta_1_A" letter="A." question="Os objetivos do SGSI/estratégia de segurança estão claramente definidos?"></Question>
                <Question id="1_pergunta_1_B" letter="B." question="Os problemas que afetam a capacidade de alcançar os objetivos são identificados e documentados, incluindo relatórios ou atas?"></Question>
                <Question id="1_pergunta_1_C" letter="C." question="Os problemas que afetam a capacidade de alcançar os objetivos são identificados e documentados, incluindo relatórios ou atas?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.2 (a) - Entendendo as necessidades e as expectativas das partes interessadas">
              <QuestionContent description="A organização deve determinar: As partes interessadas que são relevantes para o sistema de gestão da segurança da informação.">
                <Question id="1_pergunta_2_A"  letter="A." question="Existe um documento formal identificando objetivamente todas partes interessadas relevantes para o SGSI/estratégia de segurança da empresa? "></Question>
                <Question id="1_pergunta_2_B" letter="B." question="Listam as partes interessadas? De que forma fazem o levantamento (p. ex. uma tabela)? "></Question>
                <Question id="1_pergunta_2_C" letter="C." question="Essas partes podem ser clientes, fornecedores, órgão fiscalizador, órgão internacional, OAB, CVM, Bacen, colaboradores internos."></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.2 (b) - Entendendo as necessidades e as expectativas das partes interessadas">
              <QuestionContent description="A organização deve determinar: Os requisitos relevantes dessas partes interessadas.">
                <Question id="sf_pergunta_3_A"  letter="A." question="Nessa lista ou em algum documento consta os requisitos dessas partes, incluindo leis, regulamentos, contratos, resoluções, estatutos, etc.? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.2 (c) - Entendendo as necessidades e as expectativas das partes interessadas">
              <QuestionContent description="A organização deve determinar: Quais desses requisitos serão endereçados pelo sistema de gestão da segurança da informação.">
                <Question id="1_pergunta_4_A"  letter="A." question="Nessa lista ou em algum documento consta quais requisitos e obrigações relevantes para a segurança da informação serão endereçados/atendidos pelo SGSI/estratégia de segurança da empresa?  "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.3 (a) - Determinando o escopo do sistema de gestão da segurança da informação">
              <QuestionContent description="A organização deve determinar os limites e a aplicabilidade do sistema de gestão da segurança da informação para estabelecer o seu escopo. Ao determinar este escopo, a organização deve considerar: As questões internas e externas referenciadas em 4.1;">
                <Question id="1_pergunta_5_A"  letter="A." question="O escopo do SGSI foi definido e formalizado? Que áreas da empresa participaram? Houve uma discussão antes de ser formalizado?"></Question>
                <Question id="1_pergunta_5_B"  letter="B." question="Consideraram as partes relevantes e os requisitos das partes (contratos de clientes, fornecedores, etc.)? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.3 (b) - Determinando o escopo do sistema de gestão da segurança da informação">
              <QuestionContent description="A organização deve determinar os limites e a aplicabilidade do sistema de gestão da segurança da informação para estabelecer o seu escopo. Ao determinar este escopo, a organização deve considerar: Os requisitos referenciados em 4.2;">
                <Question id="1_pergunta_6_A"  letter="A." question="Dentro do documento do escopo/estratégias/de segurança tem as localidades (p. ex. localização do data center)? Fala dos processos que ocorrem na empresa? Sistemas de segurança das áreas? Está tudo descrito? Isso pode ser demonstrado?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.3 (c) - Determinando o escopo do sistema de gestão da segurança da informação">
              <QuestionContent description="A organização deve determinar os limites e a aplicabilidade do sistema de gestão da segurança da informação para estabelecer o seu escopo. Ao determinar este escopo, a organização deve considerar: As interfaces e dependências entre as atividades desempenhadas pela organização e aquelas que são desempenhadas por outras organizações.">
                <Question id="1_pergunta_7_A"  letter="A." question="O sistema de gestão da segurança da informação da empresa aborda as questões internas e externas?"></Question>
                <Question id="1_pergunta_7_B"  letter="B." question="O sistema de gestão da segurança da informação da empresa aborda os requisitos?"></Question>
                <Question id="1_pergunta_7_C"  letter="C." question="O sistema de gestão da segurança da informação da empresa aborda as interfaces e dependências entre as atividades desempenhadas pela organização e por outras organizações?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="4.4 - Sistema de gestão da segurança da informação">
              <QuestionContent description="A  organização  deve  estabelecer,  implementar,  manter  e  melhorar  continuamente   um  sistema de  gestão  da  segurança  da  informação,  incluindo  os  processos  necessários  e  suas  interações, de acordo com os requisitos deste documento. ">
                <Question id="1_pergunta_8_A"  letter="A." question="O SGSI/estratégia de segurança da informação está formalmente estabelecido e implementado, com participação das partes relevantes?"></Question>
                <Question id="1_pergunta_8_B"  letter="B." question="O SGSI é revisado periodicamente para melhoria contínua, e qual é a periodicidade dessa revisão?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 2 && (
        <FormSection>
          <TittleForm>
            <h2>Lideranca</h2>
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
            <QuestionToggle title="5.1 (a) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Assegurando que a política de segurança da informação e os objetivos de segurança da informação estejam estabelecidos e sejam compatíveis com a direção estratégica da organização;">
                <Question id="2_pergunta_1_A" letter="A." question="Como a alta direção participa da estratégia de segurança da informação e de que forma as informações são levadas para a Diretoria?"></Question>
                <Question id="2_pergunta_1_B" letter="B." question="Existem atas de reunião do Comitê de Segurança da Informação que demonstram a participação dos membros da alta direção, com encadeamento lógico, abordando pontos pendentes, bem como relatórios que evidenciam as atividades realizadas em SI ao longo de um período específico? "></Question>
                <Question id="2_pergunta_1_C" letter="C." question="Há outras evidências da existência do Comitê de Segurança e de reuniões regulares sobre o assunto?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (b) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Assegurando a integração dos requisitos do sistema de gestão da segurança da informação nos processos da organização;">
                <Question id="2_pergunta_2_A" letter="A." question="A SI faz parte do cotidiano de todas as áreas da empresa? Isso é fiscalizado ou reafirmado de alguma forma? Quem faz isso? Como é feito? "></Question>
                <Question id="2_pergunta_2_B" letter="B." question="A alta gestão cobra que operações integrem no dia a dia a estratégia de SI ou o SGSI? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (c) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Assegurando que os recursos necessários para o sistema de gestão da segurança da informação estejam disponíveis;">
                <Question id="2_pergunta_3_A" letter="A." question="Estão disponíveis os recursos necessários, fornecidos pela alta direção, para o sistema de gestão da segurança da informação? "></Question>
                <Question id="2_pergunta_3_B" letter="B." question="Como é o processo de solicitação e aprovação? Tem alguma documentação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (d) - Liderança e comprometimentos">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Comunicando a importância de uma gestão eficaz da segurança da informação e da conformidade com os requisitos do sistema de gestão da segurança da informação;">
                <Question id="2_pergunta_4_A" letter="A." question="Como a importância da gestão eficaz da segurança da informação é comunicada a todos os colaboradores internos? Existem canais de comunicação específicos, como e-mails, intranet, avisos físicos, onde as informações de SI são disponibilizadas? E como a ciente é registrada?"></Question>
                <Question id="2_pergunta_4_B" letter="B." question="No processo de onboarding, há treinamento que aborda regras e recomendações de SGSI para novos colaboradores? É informado a eles e registrada a ciência/assinatura?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (e) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Assegurando que o sistema de gestão da segurança da informação alcance seus resultados pretendidos;">
                <Question id="2_pergunta_5_A" letter="A." question="A alta direção acompanha o avanço do sistema de gestão da segurança da informação para garantir que alcance seus resultados pretendidos, e como esse acompanhamento é feito? Há documentação desse acompanhamento, como registros de testes, métricas, planos de ação, tratamento de problemas de SI, etc.?"></Question>
                <Question id="2_pergunta_5_B" letter="B." question="A organização possui uma área de auditoria interna ou terceirizada que acompanha esse processo de acompanhamento e avaliação do sistema de gestão de segurança da informação? Há evidências desse acompanhamento, como trocas de e-mails ou documentação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (f) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Orientando e apoiando pessoas a contribuir para a eficácia do sistema de gestão da segurança da informação;">
                <Question id="2_pergunta_6_A" letter="A." question="A organização possui processos específicos de orientação para o pessoal ligado à gestão, como processo de onboarding, programa de conscientização, canal de dúvidas, palestras, campanhas de phishing e pessoas responsáveis nos times para orientar os novos colaboradores?"></Question>
                <Question id="2_pergunta_6_B" letter="B." question="Como esses processos são implementados e mantidos, e quais recursos são disponibilizados para orientar o pessoal ligado à gestão?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (g) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Promovendo a melhoria contínua;">
                <Question id="2_pergunta_7_A" letter="A." question="A melhoria contínua está prevista na política de segurança da informação (PSI), sistema de gestão da segurança da informação (SGSI) ou em outra documentação, e há parâmetros definidos, métricas, metas e um processo de avaliação específico para a melhoria contínua?"></Question>
                <Question id="2_pergunta_7_B" letter="B." question="A organização verifica e avalia a melhoria contínua, seguindo uma frequência contínua? "></Question>
                <Question id="2_pergunta_7_C" letter="C." question="O processo de melhoria contínua segue o ciclo do PDCA (planejar, fazer, avaliar, agir)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.1 (h) - Liderança e comprometimento">
              <QuestionContent description="A Alta  Direção  deve  demonstrar  sua  liderança  e  comprometimento  em  relação  ao  sistema  de  gestão da segurança da informação pelos seguintes meios: Apoiando outros papéis relevantes da gestão para demonstrar como sua liderança se aplica às áreas sob sua responsabilidade.">
                <Question id="2_pergunta_8_A" letter="A." question="A alta gestão apoia os outros papéis relevantes de gestão como lideranças de suas áreas e responsáveis por SI nelas? "></Question>
                <Question id="2_pergunta_8_B" letter="B." question="Existem reuniões, e-mail, metas de gestão, reunião de gestão com área comercial, discutem as métricas de melhoria contínua?"></Question>
                <Question id="2_pergunta_8_C" letter="C." question="Tem Matriz de Risco e de Função (como matriz RACI e/ou RBAC): documentação que organize os cargos, responsabilidades, quem deve ser comunicado sobre o quê?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (a) - Política">
              <QuestionContent description="A Alta Direção deve estabelecer uma política de segurança da informação que: Seja apropriada ao propósito da organização;">
                <Question id="2_pergunta_9_A" letter="A." question="A PSI está de acordo com o propósito da organização? "></Question>
                <Question id="2_pergunta_9_B" letter="B." question="A PSI está datada, versionada, atualizada? Quando foi a última atualização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (b) - Política">
              <QuestionContent description="A Alta Direção deve estabelecer uma política de segurança da informação que: Inclua os objetivos de segurança da informação (ver 6.2) ou forneça a estrutura para estabelecer os objetivos de segurança da informação;">
                <Question id="2_pergunta_10_A" letter="A." question="Os objetivos de SI estão estabelecidos na PSI? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (c) - Política">
              <QuestionContent description="A Alta Direção deve estabelecer uma política de segurança da informação que: Inclua o comprometimento de satisfazer os requisitos aplicáveis, relacionados com a segurança da informação;">
                <Question id="2_pergunta_11_A" letter="A." question="A documentação declara a melhoria contínua, como carta da alta direção, PSI assinada, requisitos de implementação e melhorias do SGSI, requisitos legais ou regulatórios, requisitos de clientes, requisitos internos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (d) - Política">
              <QuestionContent description="A Alta Direção deve estabelecer uma política de segurança da informação que: Inclua o comprometimento com a melhoria contínua do sistema de gestão da segurança da informação.">
                <Question id="2_pergunta_12_A" letter="A." question="A PSI possui controles para medir, monitorar, gerar lições aprendidas e melhorar continuamente o SGSI? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (e) - Política">
              <QuestionContent description="A política da segurança da informação deve: Estar disponível como informação documentada;">
                <Question id="2_pergunta_13_A" letter="A." question="A PSI está documentada?"></Question>
                <Question id="2_pergunta_13_B" letter="B." question="O documento é revisado com alguma frequência definida?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (f) - Política">
              <QuestionContent description="A política da segurança da informação deve: Ser comunicada dentro da organização;">
                <Question id="2_pergunta_14_A" letter="A." question=" A PSI foi comunicada de alguma maneira dentro da organização?"></Question>
                <Question id="2_pergunta_14_B" letter="B." question="Como é esse processo de comunicação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.2 (g) - Política">
              <QuestionContent description="A política da segurança da informação deve: Estar disponível para as partes interessadas, conforme apropriado.">
                <Question id="2_pergunta_15_A" letter="A." question="A PSI está disponível e comunicada para as partes interessadas, como terceiros, clientes stakeholders e etc? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.3 (a) - Papéis, responsabilidades e autoridades organizacionais">
              <QuestionContent description="A Alta Direção deve assegurar que as responsabilidades e autoridades dos papéis relevantes para a segurança da informação sejam atribuídos e comunicados dentro da organização. A Alta Direção deve atribuir a responsabilidade e autoridade para: Assegurar que o sistema de gestão da segurança da informação esteja em conformidade com os requisitos deste documento;">
                <Question id="2_pergunta_16_A" letter="A." question="As funções e responsabilidades a respeito da segurança da informação foram definidas e atribuídas aos indivíduos de maneira formal e documentada pela Alta Direção? "></Question>
                <Question id="2_pergunta_16_B" letter="B." question="Essas funções e responsabilidades foram devidamente comunicadas pela Alta Direção a todos os funcionários, contratados e terceirizados?"></Question>
                <Question id="2_pergunta_16_C" letter="C." question="Existe um responsável por assegurar que o SGSI esteja em conformidade com os requisitos da ISO 27001?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="5.3 (b) - Papéis, responsabilidades e autoridades organizacionais">
              <QuestionContent description="A Alta Direção deve assegurar que as responsabilidades e autoridades dos papéis relevantes para a segurança da informação sejam atribuídos e comunicados dentro da organização. A Alta Direção deve atribuir a responsabilidade e autoridade para: Relatar sobre o desempenho do sistema de gestão da segurança da informação para a Alta Direção.">
                <Question id="2_pergunta_17_A" letter="A." question="É designado um (ou mais) resposnsável por relatar sobre o desempenho do SGSI para a Alta Direção? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 3 && (
        <FormSection>
          <TittleForm>
            <h2>Planejamento</h2>
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
            <QuestionToggle title="6.1.1 (a) -  Ações para abordar riscos e oportunidades">
              <QuestionContent description="Ao  planejar  o  sistema  de  gestão  da  segurança  da  informação,  a  organização  deve  considerar as  questões  referenciadas  em  4.1  e  os  requisitos  estabelecidos  em  4.2,  e  determinar  os  riscos e oportunidades que precisam ser abordados para: Assegurar que o sistema de gestão da segurança da informação pode alcançar seus resultados pretendidos;">
                <Question id="3_pergunta_1_A" letter="A." question="Existe um planejamento para atender aos requisitos e objetivos de segurança da informação, abordando riscos (fatores que podem atrapalhar os planos) e oportunidades (melhorias potenciais)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.1 (b) -  Ações para abordar riscos e oportunidades">
              <QuestionContent description="Ao  planejar  o  sistema  de  gestão  da  segurança  da  informação,  a  organização  deve  considerar as  questões  referenciadas  em  4.1  e  os  requisitos  estabelecidos  em  4.2,  e  determinar  os  riscos e oportunidades que precisam ser abordados para: Prevenir ou reduzir os efeitos indesejados; e">
                <Question id="3_pergunta_2_A" letter="A." question="As partes interessadas e seus interesses são considerados na verificação dos riscos, oportunidades, definição de objetivos e planos de ação no SGSI?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.1 (c) -  Ações para abordar riscos e oportunidades">
              <QuestionContent description="Ao  planejar  o  sistema  de  gestão  da  segurança  da  informação,  a  organização  deve  considerar as  questões  referenciadas  em  4.1  e  os  requisitos  estabelecidos  em  4.2,  e  determinar  os  riscos e oportunidades que precisam ser abordados para:Alcançar a melhoria contínua. ">
                <Question id="3_pergunta_3_A" letter="A." question="Existe um planejamento para abordar/tratar estes riscos e oportunidades?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.1 (d) -  Ações para abordar riscos e oportunidades">
              <QuestionContent description="A organização deve planejar: As ações para abordar estes riscos e oportunidades;">
                <Question id="3_pergunta_4_A" letter="A." question="Os riscos e oportunidades são desdobrados no planejamento de objetivos de SI para o próximo ciclo e em planos de ação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.1 (e) -  Ações para abordar riscos e oportunidades">
              <QuestionContent description="A organização deve planejar como: 1) integrar e implementar as ações dentro dos processos do seu sistema de gestão da segurança da informação; 2) avaliar a eficácia destas ações.">
                <Question id="3_pergunta_5_A" letter="A." question="A organização planeja a integração e implementação de ações no seu sistema de gestão da segurança da informação?"></Question>
                <Question id="3_pergunta_5_B" letter="B." question="A organização planeja a avaliação de eficácia dessas ações?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (a) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Estabeleça e mantenha critérios de riscos de segurança da informação que incluam:">
                <Question id="3_pergunta_6_A" letter="A." question="Existe uma política de gestão de riscos? Existe um processo de avaliação e classificação de riscos de segurança da informação estabelecido? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (a.1) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Estabeleça e mantenha critérios de riscos de segurança da informação que incluam: Critérios de aceitação do risco;">
                <Question id="3_pergunta_7_A" letter="A." question="A organização possui um processo de classificação de riscos e critérios de aceitação de risco definidos, considerando tanto risco inerente quanto risco residual?"></Question>
                <Question id="3_pergunta_7_B" letter="B." question="São definidos os critérios de aceitação de risco, e quais fatores são considerados nessa definição?"></Question>
                <Question id="3_pergunta_7_C" letter="C." question="A organização avalia os riscos em relação aos critérios de aceitação, monitora e revisa esses critérios?"></Question>
                <Question id="3_pergunta_7_D" letter="D." question="Os critérios de aceitação de risco estão alinhados com os objetivos de negócio, são documentados, comunicados, tratam riscos não conformes e garantem a melhoria contínua?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (a.2) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Estabeleça e mantenha critérios de riscos de segurança da informação que incluam: Inclua critérios para realizar as avaliações de risco de segurança da informação;">
                <Question id="3_pergunta_8_A" letter="A." question="Como são definidos os critérios de avaliação de segurança da informação?"></Question>
                <Question id="3_pergunta_8_B" letter="B." question="Existe uma metodologia utilizada para avaliação de riscos de segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (b) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Assegure que as contínuas avaliações de riscos de segurança da informação produzam resultados comparáveis, válidos e consistentes;">
                <Question id="3_pergunta_9_A" letter="A." question="O processo de avaliação de riscos de segurança da informação assegura que as contínuas avaliações de riscos de segurança da informação produzam resultados comparáveis, válidos e consistentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (c) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Identifique os riscos de segurança da informação:">
                <Question id="3_pergunta_10_A" letter="A." question="Como são identificados e priorizados os riscos de segurança da informação na sua organização, levando em consideração seus ativos de informação e as ameaças que podem afetá-los?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (c.1) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Identifique os riscos de segurança da informação: Aplicando o processo de avaliação do risco de segurança da informação para identificar os riscos associados com a perda de confidencialidade, integridade e disponibilidade da informação dentro do escopo do sistema de gestão da segurança da informação;">
                <Question id="3_pergunta_12_A" letter="A." question="É aplicado processo de avaliação do risco de segurança da informação para identificar os riscos associados com a perda de confidencialidade, integridade e disponibilidade da informação dentro do escopo do sistema de gestão da segurança da informação da organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (c.2) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Identifique os riscos de segurança da informação: Identificando os proprietários dos riscos.">
                <Question id="3_pergunta_13_A" letter="A." question="Os proprietários dos riscos de segurança da informação na sua organização estão designados? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (d) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Analise os riscos de segurança da informação:">
                <Question id="3_pergunta_14_A" letter="A." question="É realizada a análise de riscos de segurança da informação na sua organização, considerando as vulnerabilidades identificadas, a probabilidade e impacto dos riscos e a necessidade de implementação de controles de segurança adequados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (d.1) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Analise os riscos de segurança da informação: Avaliando as consequências potenciais que podem resultar se os riscos identificados em 6.1.2 c) 1) forem materializados;">
                <Question id="3_pergunta_15_A" letter="A." question="Há uma avaliação de potenciais consequenciais que podem resultar no caso dos riscos identificados serem materializados? Como é feita essa avaliação (é periódica, como é formalizada e registrada)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (d.2) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Analise os riscos de segurança da informação: Avaliando a probabilidade realística da ocorrência dos riscos identificados em 6.1.2 c) 1); e">
                <Question id="3_pergunta_16_A" letter="A." question="A organização realiza uma avaliação de probabilidade de ocorrência dos riscos levantados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (d.3) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: determinando os níveis de risco;">
                <Question id="3_pergunta_17_A" letter="A." question="Existe uma norma de gestão de risco?"></Question>
                <Question id="3_pergunta_17_B" letter="B." question="É realizada classificação dos riscos de acordo com seu respectivo procedimento? "></Question>
                <Question id="3_pergunta_17_C" letter="C." question="Este procedimento está devidamente formalizado?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (e) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Avalie os riscos de segurança da informação:">
                <Question id="3_pergunta_18_A" letter="A." question="Os riscos são avaliados, considerando sua identificação, causa raiz, cenário e descrição?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (e.1) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Avalie os riscos de segurança da informação: Comparando os resultados da análise de riscos com os critérios de riscos estabelecidos em 6.1.2 a); e">
                <Question id="3_pergunta_19_A" letter="A." question="A organização realiza a comparação da análise dos riscos com os critérios de risco estabelecidos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.2 (e.2) - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: Avalie os riscos de segurança da informação: Priorizando os riscos analisados para o tratamento do risco.">
                <Question id="3_pergunta_20_A" letter="A." question="O tramento dos riscos é priorizado de acordo com a sua classificação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="x - Avaliação de riscos de segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de avaliação de riscos de segurança da informação que: A organização deve reter informação documentada sobre o processo de avaliação de riscos da segurança da informação.">
                <Question id="3_pergunta_21_A" letter="A." question="Esse processo gera informação documentada?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.3 (a) - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Selecionar, de forma apropriada, as opções de tratamento dos riscos da segurança da informação, levando em consideração os resultados da avaliação de riscos;">
                <Question id="3_pergunta_22_A" letter="A." question="As opções de tratamento para cada risco são selecionadas considerando as avaliações dos riscos, ou seja, nível, impacto, probabilidade, consequências etc.? "></Question>
                <Question id="3_pergunta_22_B" letter="B." question="A opção de aceitar ou reter observa o apetite a risco da empresa? Essa determinação está formalizada na norma de gestão de riscos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_23_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_23_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_24_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_24_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_25_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_25_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_26_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_26_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_27_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_27_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_28_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_28_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_29_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_29_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_30_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_30_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_31_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_31_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_32_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_32_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_33_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_33_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_34_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_34_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_35_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_35_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_36_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_36_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_37_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_37_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_38_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_38_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_39_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_39_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Segurança da informação no gerenciamento de projetos">
              <QuestionContent description="A segurança da informação deve ser integrada ao gerenciamento de projetos.">
                <Question id="3_pergunta_40_A" letter="A." question="Os projetos da organização passam por avaliações de segurança da informação?"></Question>
                <Question id="3_pergunta_40_B" letter="B." question="Existe um procedimento formal e documentado que aborda a necessidade e o processo para que todos os projetos sejam avaliados em termos de segurança da informação, incluindo a especificação de requisitos de segurança tanto para novos sistemas como para aprimoramentos de sistemas já existentes?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 4 && (
        <FormSection>
          <TittleForm>
            <h2>Apoio</h2>
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
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_6_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_6_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_7_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_7_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_8_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_8_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_9_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_9_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_10_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_10_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_11_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_11_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_12_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_12_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_13_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_13_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_14_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_14_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_15_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_15_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_16_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_16_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_17_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_17_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_18_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_18_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_19_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_19_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_20_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_20_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_21_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_21_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_22_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_22_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_23_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_23_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Descarte Seguro ou Reutilização de Equipamentos">
              <QuestionContent description="Os itens dos equipaments que contenham mídia de armazenamento devem ser verificados para assegurar que quaisquer dados confidenciais e software licenciado tenham sido removidos ou substituídos com segurança antes do descarte ou reutilização.">
                <Question id="4_pergunta_24_A" letter="A." question="Existe uma política que estabeleça como os ativos de informação podem ser reutilizados, de modo a assegurar que todos os dados sensíveis e softwares licenciados tenham sido removidos ou sobre gravados com segurança? "></Question>
                <Question id="4_pergunta_24_B" letter="B." question="Existe um procedimento de verificação se as medidas são adequadamente realizadas antes da reutilização ou descarte? "></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      {step === 5 && (
        <FormSection>
          <TittleForm>
            <h2>Operação</h2>
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
            <h2>Avalição o de desempenho</h2>
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
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Controle de Acesso | Filtragem da Web">
              <QuestionContent description="O acesso a sites externos deve ser gerenciado para reduzir a exposição a conteúdo malicioso.">
                <Question id="6_pergunta_10_A" letter="A." question="O gerenciamento de acesso a sites externos é realizado? "></Question>
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
            <h2>Melhoria</h2>
            <div>
              <Button type="primary" size="small" fill={true} onClick={prevStep}>
                Voltar
              </Button>
              <Button type="primary" size="small" fill={true} >
                Enviar
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
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="Gestão de Fornecedores  | Monitoramento, análise crítica e gestão de mudanças dos serviços de fornecedores">
              <QuestionContent description="A organização deve monitorar, analisar criticamente, avaliar e gerenciar regularmente a mudança nas práticas de segurança da informação dos fornecedores e na prestação de serviços.">
                <Question id="7_pergunta_4_A" letter="A." question="Os fornecedores estão sujeitos a monitoramento, análise crítica e e auditorias em intervalos regulares de tempo?"></Question>
                <Question id="7_pergunta_4_A" letter="B." question="As mudanças na prestação de serviços estão sujeitas a um procedimento de gestão que inclui avaliação de segurança e risco?   "></Question>
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

      <Footer></Footer>
    </Container>
  );
}