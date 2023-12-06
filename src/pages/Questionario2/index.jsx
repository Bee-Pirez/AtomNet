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
            <QuestionToggle title="6.1.3 (b) - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Determinar todos os controles que são necessários para implementar as opções escolhidas do tratamento de riscos da segurança da informação. ">
                <Question id="3_pergunta_23_A" letter="A." question="Existe algum processo de avaliação ou determinação de pertinência na escolha dos controles de segurança a serem aplicados para tratar os riscos? "></Question>
                <Question id="3_pergunta_23_B" letter="B." question="É considerado que efeito o controle terá sobre a probabilidade e o impacto dos riscos? É considerado de que maneira o controle mantém o nível de risco pretendido?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.3 (c) - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Comparar os controles determinados em 6.1.3 b) com aqueles do Anexo A e verificar se nenhum controle necessário foi omitido;">
                <Question id="3_pergunta_24_A" letter="A." question="É feita a verificação de que todos os controles necessários foram considerados, tendo por base o anexo A da ISO?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.3 (d) - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Elaborar uma Declaração de Aplicabilidade que contenha: os controles necessários (ver 6.1.3 b) e c)); a justificativa para inclusões; se os controles necessários são implementados ou não; e a justificativa para a exclusão de quaisquer controles do Anexo A.">
                <Question id="3_pergunta_25_A" letter="A." question="A organização realiza a declaração de aplicabilidade?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.3 (e) - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Preparar um plano para tratamento de riscos da segurança da informação;">
                <Question id="3_pergunta_26_A" letter="A." question="A organização elabora um plano de tratamento dos riscos?"></Question>
                <Question id="3_pergunta_26_B" letter="B." question="São indicados prazos, medidas, ações, controles e proprietários dos riscos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.1.3 (f) - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve estabelecer e aplicar um processo de tratamento de riscos da segurança da informação para: Obter a aprovação dos proprietários dos riscos do plano de tratamento de riscos da segurança da informação e a aceitação dos riscos residuais de segurança da informação.">
                <Question id="3_pergunta_27_A" letter="A." question="As opções escolhidas para tratamento dos riscos são aprovadas pelos respectivos proprietários?"></Question>
                <Question id="3_pergunta_27_B" letter="B." question="Os riscos residuais são formalmente aceitos pelos proprietários dos riscos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="x - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve reter a informação documentada relativa ao processo de tratamento de riscos da segurança da informação.">
                <Question id="3_pergunta_28_A" letter="A." question="Todas as documentações são armazenadas e documentadas, demonstrando a recorrência de sua realização e dos ciclos de gestão?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (a) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser consistentes com a política da segurança da informação;">
                <Question id="3_pergunta_29_A" letter="A." question="Os objetivos de segurança estão alinhados com as estratégias e diretrizes de segurança estabelecidos da PSI da organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (b) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser mensuráveis (quando aplicável);">
                <Question id="3_pergunta_30_A" letter="A." question="Os objetivos estabelecidos são mensuráveis? Possuem métricas? Alguma forma quantitativa de controle? Ex.: OKRs, KPIs, metas etc."></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (c) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Levar em conta os requisitos da segurança da informação aplicáveis e os resultados da avaliação e tratamento de riscos;">
                <Question id="3_pergunta_31_A" letter="A." question="Os objetivos de SI levam em consideração os requisitos de segurança aplicáveis a organização (legais, contratuais, regulamentares, fos frameworks como ISO)? "></Question>
                <Question id="3_pergunta_31_B" letter="B." question="Os objetivos de SI consideram os resultados do processo de gestão de risco da organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (d) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser monitorados;">
                <Question id="3_pergunta_32_A" letter="A." question="Os objetivos de SI são monitorados? Como?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (e) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser comunicados;">
                <Question id="3_pergunta_33_A" letter="A." question="Os objetivos de SI são comunicados às partes pertinentes?"></Question>
                <Question id="3_pergunta_33_B" letter="B." question="A documentação desses objetivos faz parte da documentação que os colaboradores devem tomar ciência no processo de onboarding ou no programa de conscientização da empresa? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (f) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser atualizados, conforme apropriado;">
                <Question id="3_pergunta_34_A" letter="A." question="Os objetivos de SI são atualizados, no mínimo anualmente, ou antes, quando for pertinente? Ex.: surgimento de algum novo risco crítico; projeto de migração para a nuvem; mudança nas estratégias de segurança da empresa devido a algum incidente que tenha ocorrido etc."></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (g) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve estabelecer os objetivos da segurança da informação para as funções e níveis relevantes. Os objetivos da segurança da informação devem: Ser disponibilizados como informação documentada.">
                <Question id="3_pergunta_35_A" letter="A." question="Os objetivos de SI são formalizados como documentação escrita e disponibilizados às partes interessadas? Ex.: são enviados por e-mail aos colaborados no ciclo anual de conscientização? São enviados ao colaborador quando entra na empresa? Ficam disponíveis na intranet para todos os colaboradores?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (h) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: O que será feito;">
                <Question id="3_pergunta_36_A" letter="A." question="A documentação dos objetivos de SI apresenta o planejamento para atingir esses objetivos? Ex.: projetos; ações; consientização; quais serviços serão contratados; ferramentas etc."></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (i) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Quais recursos serão necessários;">
                <Question id="3_pergunta_37_A" letter="A." question="Os objetivos de SI consideram os recursos necessários (Tanto os recursos financeiros quanto humanos e materiais) para sua concretização? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (j) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Quem será responsável;">
                <Question id="3_pergunta_38_A" letter="A." question="Os objetivos de SI possuem um responsável determinado por sua implementação e monitoramento?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (k) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Quando estará concluído;">
                <Question id="3_pergunta_39_A" letter="A." question="Os objetivos de SI estabelecem prazos de conclusão para serem alcançados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.2 (l) - Objetivos da segurança da informação e planejamento para alcançá-los">
              <QuestionContent description="A organização deve reter informação documentada dos objetivos da segurança da informação. Ao planejar como alcançar os seus objetivos da segurança da informação, a organização deve determinar: Como os resultados serão avaliados.">
                <Question id="3_pergunta_40_A" letter="A." question="Os objetivos de SI preveem como o atingimento desses objetivos serão avaliados? Como? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="6.3 - Planejamento de mudanças">
              <QuestionContent description="Quando a organização determinar as necessidades para as mudanças do sistema de gestão da segurança da informação, estas mudanças devem ser conduzidas de uma forma planejada. ">
                <Question id="3_pergunta_41_A" letter="A." question="Quando por algum motivo, seja como resultado da análise crítica, seja por alguma mudança de contexto interno ou externo da organização, ocorre a necessidade de realização de mudanças no SGSI, isso é feita de forma planejada? "></Question>
                <Question id="3_pergunta_41_B" letter="B." question="Há um cronograma, um planejamento forma, plano de ação, designação de responsáveis e ações, prazos etc.?"></Question>
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
            <QuestionToggle title="7.1 - Recursos">
              <QuestionContent description="A organização deve determinar e prover recursos necessários para estabelecer, implementar, manter e melhorar continuamente o sistema de gestão da segurança da informação. ">
                <Question id="4_pergunta_1_A" letter="A." question="A organização determina e provê os recursos necessários para estabelecer, implementar, manter e melhorar continuamente o sistema de gestão da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.2 (a) - Competência">
              <QuestionContent description="A organização deve: Determinar a competência necessária da(s) pessoa(s) que realiza(m) trabalho sob o seu controle que afete o desempenho da segurança da informação;">
                <Question id="4_pergunta_2_A" letter="A." question="A organização possui alguma matriz de responsabilidades ou outra documentação pertinente em que estejam designadas as responsabilidades das pessoas envolvidas com o bom funcionamento do SGSI?"></Question>
                <Question id="4_pergunta_2_B" letter="B." question="Essas pessoas são formalmente avisadas e devidamente esclarecidas de quais são suas competências, atribuições, papéis e responsabilidades?"></Question>
                <Question id="4_pergunta_2_C" letter="C." question="A organização determina a competência necessária das pessoas que realizam trabalhos sob o seu controle que afetem o desempenho da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.2 (b) - Competência">
              <QuestionContent description="A organização deve: Assegurar que essas pessoas são competentes, com base em educação, treinamento ou experiência apropriados;">
                <Question id="4_pergunta_3_A" letter="A." question="A organização tem alguma forma de preparação e aprimoramento de competência dessas pessoas mencionadas? São realizados treinamentos específicos com elas? Isso faz parte do planejamento de conscientização da empresa?"></Question>
                <Question id="4_pergunta_3_B" letter="B." question="Tem algum canal ou meio de contato para tirar dúvidas, levantar questões? Isso faz parte do processo de onboarding dos novos colaboradores?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.2 (c) - Competência">
              <QuestionContent description="A organização deve: Onde aplicável, tomar ações para adquirir a competência necessária e avaliar a eficácia das ações tomadas; e">
                <Question id="4_pergunta_4_A" letter="A." question="São realizadas ações para verificar a eficácia dessa preparação e aprimoramento de competências e absorção desses conhecimentos? São realizados testes, campanhas de phishing, provas, tem algum tipo de gameficação, exigência de certificados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.2 (d) - Competência">
              <QuestionContent description="A organização deve: Reter informação documentada apropriada como evidência da competência. ">
                <Question id="4_pergunta_5_A" letter="A." question="A organização retem informação documentada apropriada como evidência da competência (das pessoas que realizam trabalhos sob o seu controle)?"></Question>
                <Question id="4_pergunta_5_B" letter="B." question="São registradas listas de presença dos treinamentos? Certificações dos colaboradores? São registrados os testes e seus resultados, palestras, treinamentos etc.?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.3 (a) - Conscientização">
              <QuestionContent description="Pessoas que realizam trabalho sob o controle da organização devem estar cientes: Da política da segurança da informação;">
                <Question id="4_pergunta_6_A" letter="A." question="Os colaboradores da organização estão cientes a respeito da Política de Segurança da Informação? "></Question>
                <Question id="4_pergunta_6_B" letter="B." question="A PSI é divulgada para os colaboradores? É recolhido algum termo de ciência dos colaboradores? A PSI faz parte do conteúdo do programa de conscientização da empresa?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.3 (b) - Conscientização">
              <QuestionContent description="Pessoas que realizam trabalho sob o controle da organização devem estar cientes: De suas contribuições para a eficácia do sistema de gestão da segurança da informação, incluindo os benefícios da melhoria do desempenho da segurança da informação; e">
                <Question id="4_pergunta_7_A" letter="A." question="Os colaboradores da organização estão cientes sobre suas contribuições para a eficácia do Sistema de Gestão da Segurança da Informação? "></Question>
                <Question id="4_pergunta_7_B" letter="B." question="Os colaboradores da organização estão cientes sobre os benefícios da melhoria do desempenho da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.3 (c) - Conscientização">
              <QuestionContent description="Pessoas que realizam trabalho sob o controle da organização devem estar cientes: Das implicações da não conformidade com os requisitos do sistema de gestão da segurança da informação.">
                <Question id="4_pergunta_8_A" letter="A." question="Os colaboradores da organização estão cientes das implicações das não conformidades com os requisitos do Sistema de Gestão da Segurança da informação?"></Question>
                <Question id="4_pergunta_8_B" letter="B." question="Os colaboradores entendem o que são não conformidades e são orientados sobre os impactos de suas ações e comportamentos na segurança da empresa? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.4 (a) - Comunicação">
              <QuestionContent description="A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: O que comunicar;">
                <Question id="4_pergunta_9_A" letter="A." question="A organização separa o que é necessário comunicar às partes interessadas internas e externas a respeito do SGSI?"></Question>
                <Question id="4_pergunta_9_B" letter="B." question="A organização determina a necessidade de comunicações internas e externas relevantes para o SGSI, incluindo o conteúdo da comunicação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.4 (b) - Comunicação">
              <QuestionContent description="A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: Quando comunicar;">
                <Question id="4_pergunta_10_A" letter="A." question="Essa determinação de comunicação interna e externa relevantes inclui a informação de quando comunicar (casos ou periodicididade de comunicação)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.4 (c) - Comunicação">
              <QuestionContent description="A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: Com quem comunicar;">
                <Question id="4_pergunta_11_A" letter="A." question="Essa determinação de comunicação interna e externa relevantes inclui a informação sobre com quem comunicar (entidades, orgãos, parceiros e outros a quem se deve fazer a comunicação)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.4 (d) - Comunicação">
              <QuestionContent description="A organização deve determinar a necessidade de comunicações internas e externas relevantes para o sistema de gestão da segurança da informação, incluindo: Como se comunicar.">
                <Question id="4_pergunta_12_A" letter="A." question="Essa determinação de comunicação interna e externa relevantes inclui a informação sobre como se comunicar (a forma e procedimento adequados de fazer a comunicação)? O discurso e as informações são adaptadas ao público-alvo?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.1 (a) - Informação documentada">
              <QuestionContent description="O sistema de gestão da segurança da informação da organização deve incluir: Informação documentada requerida por este documento; e">
                <Question id="4_pergunta_13_A" letter="A." question="O SGSI da organização inclui a informação documentada requerida pela norma ISO 27001?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.1 (b)  - Informação documentada">
              <QuestionContent description="O sistema de gestão da segurança da informação da organização deve incluir: Informação documentada determinada pela organização como sendo necessária para a eficácia do sistema de gestão da segurança da informação.">
                <Question id="4_pergunta_14_A" letter="A." question="A organização determina quais são as documentações necessárias para a eficácia do seu SGSI? Isso está incluído no SGSI da empresa? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.2 (a) - Criando e atualizando">
              <QuestionContent description="Ao criar e atualizar a informação documentada, a organização deve assegurar, de forma apropriada: A identificação e descrição (por exemplo, título, data, autor ou um número de referência);">
                <Question id="4_pergunta_15_A" letter="A." question="A organização assegura que cria e atualiza a informação documentada atribuindo a devida identificação e descrição adequadas (por exemplo, título, data, autor ou um número de referência)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.2 (b) - Criando e atualizando">
              <QuestionContent description="Ao criar e atualizar a informação documentada, a organização deve assegurar, de forma apropriada: O formato (por exemplo, linguagem, versão do software, gráficos) e seu meio (por exemplo, papel, eletrônico); e">
                <Question id="4_pergunta_16_A" letter="A." question="A organização assegura que cria e atualiza a informação documentada em formato adequado (por exemplo, linguagem, versão do software, gráficos)? "></Question>
                <Question id="4_pergunta_16_B" letter="B." question="A organização assegura que cria e atualiza a informação documentada em meio adequado (por exemplo, papel, eletrônico)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.2 (c) - Criando e atualizando">
              <QuestionContent description="Ao criar e atualizar a informação documentada, a organização deve assegurar, de forma apropriada: A análise crítica e aprovação para pertinência e adequação.">
                <Question id="4_pergunta_17_A" letter="A." question="A organização implementa um processo de análise crítica e aprovação para garantir a pertinência e adequação na criação e atualização da informação documentada?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (a) - Controle da informação documentada">
              <QuestionContent description="A informação documentada requerida pelo sistema de gestão da segurança da informação e por este documento deve ser controlada para assegurar que: Esteja disponível e adequada para o uso, onde e quando necessário; e">
                <Question id="4_pergunta_18_A" letter="A." question="A organização controla a informação documentada para garantir disponibilidade e adequação onde e quando necessário, conforme requerido pelo SGSI e pela ISO?"></Question>
                <Question id="4_pergunta_18_B" letter="B." question="A documentação interna da empresa está disponível para os colaboradores, em local de fácil acesso, e é conhecida pelos colaboradores e outras partes interessadas?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (b) - Controle da informação documentada">
              <QuestionContent description="A informação documentada requerida pelo sistema de gestão da segurança da informação e por este documento deve ser controlada para assegurar que: Esteja protegida adequadamente (por exemplo, contra perda de  confidencialidade, uso indevido ou perda de integridade).">
                <Question id="4_pergunta_19_A" letter="A." question="A organização aplica controles de segurança adequados para garantir a confidencialidade, integridade e disponibilidade das informações?"></Question>
                <Question id="4_pergunta_19_B" letter="B." question="A organização controla a informação documentada requerida pelo SGSI e pela ISO para assegurar que ela esteja protegida adequadamente contra perda de confidencialidade, uso indevido ou perda de integridade?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (c) - Controle da informação documentada">
              <QuestionContent description="Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável: A Distribuição, acesso, recuperação e uso; NOTA: O acesso implica em uma decisão quanto à permissão para apenas ler a informação documentada, ou na permissão e autoridade para ver e alterar a informação documentada, etc.">
                <Question id="4_pergunta_20_A" letter="A." question="A organização, ao controlar a informação documentada, considera atividades como distribuição, acesso, recuperação e uso?"></Question>
                <Question id="4_pergunta_20_B" letter="B." question="No controle, há decisões sobre permissões para ler ou alterar a informação documentada?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (d) - Controle da informação documentada">
              <QuestionContent description="Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável: O armazenamento e preservação, incluindo a preservação da legibilidade;">
                <Question id="4_pergunta_21_A" letter="A." question="A organização considera e avalia as melhores práticas e formas de  armazenamento e preservação da documentação, inclusive quanto à legibilidade? "></Question>
                <Question id="4_pergunta_21_B" letter="B." question="É considerada a criticidade, classificação e o estado da documentação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (e) - Controle da informação documentada">
              <QuestionContent description="Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável: O controle de mudanças (por exemplo, controle de versão);">
                <Question id="4_pergunta_22_A" letter="A." question="A organização realiza controle de mudanças da documentação (por exemplo, controle de versão e de alteração)?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (f) - Controle da informação documentada">
              <QuestionContent description="Para o controle da informação documentada, a organização deve considerar as seguintes atividades, conforme aplicável: A retenção e disposição.">
                <Question id="4_pergunta_23_A" letter="A." question="A organização realiza controle de retenção e disposição da documentação?"></Question>
                <Question id="4_pergunta_23_B" letter="B." question="Há disposições formalizadas acerca da retenção da documentação, contendo prazos, método de armazenamento etc., bem como sobre compartilhamento e divulgação da documentação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="7.5.3 (final) - Controle da informação documentada">
              <QuestionContent description="A informação documentada de origem externa, determinada pela organização como necessária para o planejamento e a operação do sistema de gestão da segurança da informação, deve ser identificada como apropriada e controlada. ">
                <Question id="4_pergunta_24_A" letter="A." question="Informações de origem externas que sejam necessárias para a organização possuem um processo de internalização, em que sejam devidamente identificadas, classificadas e controladas? "></Question>
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
            <QuestionToggle title="8.1 - Planejamento e controle operacionais">
              <QuestionContent description="A organização deve planejar, implementar e controlar os processos necessários para atender aos requisitos e para implementar as ações determinadas na Seção 6:
                estabelecendo critérios para os processos; implementando controles dos processos de acordo com os critérios. A informação documentada deve ser disponibilizada na abrangência necessária para gerar a confiança de que os processos estão sendo realizados conforme planejado. A organização deve controlar as mudanças planejadas e analisar criticamente as consequências de mudanças não previstas, tomando ações para mitigar quaisquer efeitos adversos, conforme necessário. A organização deve assegurar que os processos, produtos ou serviços terceirizados que são relevantes para o sistema de gestão da segurança da informação sejam controlados. ">
                <Question id="5_pergunta_1_A" letter="A." question="Os processos da organização são formalizados, com critérios estabelecidos e controles implementados?"></Question>
                <Question id="5_pergunta_1_B" letter="B." question="A informação documentada é disponibilizada para as pessoas que precisam dela?"></Question>
                <Question id="5_pergunta_1_C" letter="C." question="A organização controla mudanças planejadas, analisa as consequências de mudanças não previstas e assegura o controle de processos terceirizados relevantes ao SGSI, incluindo requisitos de segurança para fornecedores e parceiros?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="8.2 - Avaliação de riscos da segurança da informação">
              <QuestionContent description="A organização deve realizar avaliações de riscos da segurança da informação a intervalos planejados, ou quando mudanças significativas forem propostas ou ocorrerem, levando em conta os critérios estabelecidos em 6.1.2 a). A organização deve reter informação documentada dos resultados das avaliações de riscos da segurança da informação. ">
                <Question id="5_pergunta_2_A" letter="A." question="A organização realiza avaliações de riscos da segurança da informação em intervalos planejados ou quando ocorrem mudanças significativas?"></Question>
                <Question id="5_pergunta_2_B" letter="B." question="As avaliações de riscos levam em conta os critérios estabelecidos para o processo de avaliação e a organização mantém informação documentada dos resultados dessas avaliações?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="8.3 - Tratamento de riscos da segurança da informação">
              <QuestionContent description="A organização deve implementar o plano de tratamento de riscos da segurança da informação. A organização deve reter informação documentada dos resultados do tratamento de riscos da segurança da informação. ">
                <Question id="5_pergunta_3_A" letter="A." question="A organização possui um plano de tratamento de riscos de SI?"></Question>
                <Question id="5_pergunta_3_B" letter="B." question="O plano de tratamento de riscos está implementado?"></Question>
                <Question id="5_pergunta_3_C" letter="C." question="A organização documenta e retém os resultados do tratamento de riscos de SI?"></Question>
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
            <QuestionToggle title="9.1 (a) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="A organização deve determinar: O que precisa ser monitorado e medido, incluindo controles e processos da segurança da informação;">
                <Question id="6_pergunta_1_A" letter="A." question="A organização determina o que precisa ser monitorado e medido?"></Question>
                <Question id="6_pergunta_1_B" letter="B." question="A determinação sobre o que precisa ser monitorado e medido inclui controles e processos da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.1 (b) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="A organização deve determinar: Os métodos para monitoramento, medição, análise e avaliação, conforme aplicável, para assegurar resultados válidos. Convém que os métodos selecionados produzam resultados comparáveis e reproduzíveis a serem considerados válidos;">
                <Question id="6_pergunta_2_A" letter="A." question="A organização determina os métodos para monitoramento, medição, análise e avaliação, conforme aplicável, para assegurar resultados válidos?"></Question>
                <Question id="6_pergunta_2_B" letter="B." question="Os métodos selecionados produzem resultados comparáveis e reproduzíveis?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.1 (c) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="A organização deve determinar: Quando o monitoramento e a medição devem ser realizados;">
                <Question id="6_pergunta_3_A" letter="A." question="A organização determina quando o monitoramento e a medição devem ser realizados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9,1 (d) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="A organização deve determinar: Quem deve monitorar e medir;">
                <Question id="6_pergunta_4_A" letter="A." question="A organização determina quem deve monitorar e medir?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.1 (e) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="A organização deve determinar: Quando os resultados do monitoramento e da medição devem ser analisados e avaliados;">
                <Question id="6_pergunta_5_A" letter="A." question="A organização determina quando os resultados do monitoramento e da medição devem ser analisados e avaliados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.1 (f) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="A organização deve determinar: Quem deve analisar e avaliar estes resultados.">
                <Question id="6_pergunta_6_A" letter="A." question="A organização determina quem deve analisar e avaliar estes resultados?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.1 (final) - Monitoramento, medição, análise e avaliação">
              <QuestionContent description="Informação documentada deve ser disponibilizada como evidência dos resultados. A organização deve avaliar o desempenho da segurança da informação e a eficácia do sistema de gestão da segurança da informação ">
                <Question id="6_pergunta_7_A" letter="A." question="As ações de monitoramento, medição, análise e avaliação são registadas e documentadas? Elas são armazenadas de maneira a evidenciar os resultados e formar uma trilha de auditoria?"></Question>
                <Question id="6_pergunta_7_B" letter="B." question="A organização avalia o desempenho da SI e a eficácia do SGSI periodicamente? Essa avaliação é registrada e formalizada?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.1 (a) - Auditoria interna">
              <QuestionContent description="A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação: está em conformidade com:">
                <Question id="6_pergunta_8_A" letter="A." question="A organização realiza avaliações de riscos da segurança da informação em intervalos planejados ou quando ocorrem mudanças significativas?"></Question>
                <Question id="6_pergunta_8_B" letter="B." question="As avaliações de riscos levam em conta os critérios estabelecidos para o processo de avaliação, e a organização mantém informação documentada dos resultados dessas avaliações?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.1 (a.1) - Auditoria interna">
              <QuestionContent description="A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação: está em conformidade com: Os próprios requisitos da organização para o seu sistema de gestão da segurança da informação;">
                <Question id="6_pergunta_9_A" letter="A." question="Existe um procedimento formalizado para planejar e conduzir auditorias internas do SGSI que considere os requisitos eleitos pela organização? Isso é feito em intervalos regulares? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.1 (a.2) - Auditoria interna">
              <QuestionContent description="A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação: está em conformidade com: Os requisitos deste documento;">
                <Question id="6_pergunta_10_A" letter="A." question="Existe um procedimento formalizado para planejar e conduzir auditorias internas do SGSI que considere os requisitos da ISO27001? Isso é feito em intervalos regulares? "></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.1 (b) - Auditoria interna">
              <QuestionContent description="A organização deve conduzir auditorias internas a intervalos planejados para prover informações sobre se o sistema de gestão da segurança da informação: Está efetivamente implementado e mantido.">
                <Question id="6_pergunta_11_A" letter="A." question="As auditorias internas planejadas estão ocorrendo na forma e na periodicidade determinadas?"></Question>
                <Question id="6_pergunta_11_B" letter="B." question="A organização mantém efetivamente implementado e mantido a condução de auditorias internas em intervalos planejados para promover informações do SGSI?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.2 (a) - Programa de auditoria interna">
              <QuestionContent description="A organização deve planejar, estabelecer, implementar e manter programa(s) de auditoria, incluindo frequência, métodos, responsabilidades, requisitos de planejamento e relato. Ao estabelecer programa(s) de auditoria interna, a organização deve considerar a importância dos processos pertinentes e os resultados de auditorias anteriores. A organização deve: Definir os critérios e o escopo da auditoria, para cada auditoria;">
                <Question id="6_pergunta_12_A" letter="A." question="Existe um procedimento para planejar e conduzir auditorias internas do SGSI?"></Question>
                <Question id="6_pergunta_12_B" letter="B." question="São definidos critérios e escopos de auditoria, considerando a criticidade dos processos de negócio e resultados de auditorias anteriores?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.2 (b) - Programa de auditoria interna">
              <QuestionContent description="A organização deve planejar, estabelecer, implementar e manter programa(s) de auditoria, incluindo frequência, métodos, responsabilidades, requisitos de planejamento e relato. Ao estabelecer programa(s) de auditoria interna, a organização deve considerar a importância dos processos pertinentes e os resultados de auditorias anteriores. A organização deve: Selecionar auditores e conduzir auditorias que assegurem objetividade e imparcialidade do processo de auditoria;">
                <Question id="6_pergunta_13_A" letter="A." question="A organização especifica formalmente os critérios para que os auditores (sejam internos ou terceirizados) possam atuar em suas auditorias internas?"></Question>
                <Question id="6_pergunta_13_B" letter="B." question="Os auditores são selecionados de acordo com esses processos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.2.2 (c) - Programa de auditoria interna">
              <QuestionContent description="A organização deve planejar, estabelecer, implementar e manter programa(s) de auditoria, incluindo frequência, métodos, responsabilidades, requisitos de planejamento e relato. Ao estabelecer programa(s) de auditoria interna, a organização deve considerar a importância dos processos pertinentes e os resultados de auditorias anteriores. A organização deve: Assegurar que os resultados das auditorias sejam relatados para a gestão pertinente.">
                <Question id="6_pergunta_14_A" letter="A." question="Os resultados das auditorias internas são relatados para a gestão?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="x - Programa de auditoria interna">
              <QuestionContent description="Informação documentada deve ser disponibilizada como evidência da implementação do(s) programa(s) de auditoria e dos resultados da auditoria.">
                <Question id="6_pergunta_15_A" letter="A." question="A informação documentada é disponibilizada como evidência da implementação do programa de auditoria e dos resultados da auditoria?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.1 - Análise crítica pela Direção">
              <QuestionContent description="A Alta Direção deve analisar criticamente o sistema de gestão da segurança da informação da organização em intervalos planejados, para assegurar a sua contínua adequação, pertinência e eficácia. ">
                <Question id="6_pergunta_16_A" letter="A." question="A PSI prevê a necessidade de a Alta Direção realizar análise crítica do SGSI, com periodicidade determinada?"></Question>
                <Question id="6_pergunta_16_B" letter="B." question="A análise crítica aborda os tópicos das alíneas para verificar a adequação, pertinência e eficácia do SGSI em relação aos objetivos e estratégias de segurança da organização?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (a) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Situação das ações de análises críticas anteriores pela Direção;">
                <Question id="6_pergunta_17_A" letter="A." question="Os resultados das análises críticas anteriores são comparados? Qualitativa e quantitativamente?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (b) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Mudanças nas questões internas e externas que sejam relevantes para o sistema de gestão da segurança da informação;">
                <Question id="6_pergunta_18_A" letter="A." question="Mudanças relevantes ao SGSI são levantadas, registradas e consideradas nas análises críticas? Como?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (c) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Mudanças nas necessidades e expectativas das partes interessadas que sejam relevantes para o sistema de gestão da segurança da informação">
                <Question id="6_pergunta_19_A" letter="A." question="A análise crítica pela Direção inclui considerações em relação a mudanças nas necessidades e expectativas das partes interessadas, que sejam relevantes para o sistema de gestão da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (d) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Feedback sobre o desempenho da segurança da informação, incluindo tendências para:">
                <Question id="6_pergunta_20_A" letter="A." question="A análise crítica pela Direção deve considera o feedback sobre o desempenho da segurança da informação e as tendências associadas?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (d.1) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Feedback sobre o desempenho da segurança da informação, incluindo tendências para: Não conformidades e ações corretivas;">
                <Question id="6_pergunta_21_A" letter="A." question="A análise crítica pela Direção considera as não conformidades e ações corretivas relacionadas ao sistema de gestão da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (d.2) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Feedback sobre o desempenho da segurança da informação, incluindo tendências para:Resultados da medição e monitoramento;">
                <Question id="6_pergunta_22_A" letter="A." question="A análise crítica pela Direção aborda os resultados da medição e monitoramento relacionados ao sistema de gestão da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (d.3) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Feedback sobre o desempenho da segurança da informação, incluindo tendências para: Resultados de auditorias;">
                <Question id="6_pergunta_23_A" letter="A." question="A análise crítica pela Direção abrange os resultados de auditorias relacionados ao sistema de gestão da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (d.4) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Feedback sobre o desempenho da segurança da informação, incluindo tendências para: Cumprimento dos objetivos da segurança da informação;">
                <Question id="6_pergunta_24_A" letter="A." question="A análise crítica pela Direção abrange o cumprimento dos objetivos da segurança da informação?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (e) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Feedback das partes interessadas;">
                <Question id="6_pergunta_25_A" letter="A." question="A análise crítica pela Direção abrange o feedback das partes interessadas?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (f) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Resultados da avaliação dos riscos e situação do plano de tratamento de riscos;">
                <Question id="6_pergunta_26_A" letter="A." question="A análise crítica pela Direção abrange os resultados da avaliação dos riscos e a situação do plano de tratamento de riscos?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.2 (g) - Entradas da análise crítica pela Direção">
              <QuestionContent description="A análise crítica pela Direção deve incluir considerações em relação a: Oportunidades para a melhoria contínua.">
                <Question id="6_pergunta_27_A" letter="A." question="A análise crítica pela Direção abrange oportunidades para a melhoria contínua?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="9.3.3 - Resultados da análise crítica pela Direção">
              <QuestionContent description="Os resultados da análise crítica pela Direção devem incluir decisões relativas às oportunidades para melhoria contínua e quaisquer necessidades de mudanças do sistema de gestão da segurança da informação. Informação documentada deve ser disponibilizada como evidência dos resultados das análises críticas pela Direção.">
                <Question id="6_pergunta_28_A" letter="A." question="A Alta Direção considera os resultados da análise crítica na sua tomada de decisões? Ex.: redefinição dos objetivos de SI; aprovação de orçamento; contratação de novos serviços; mudança no escopo de auditoria etc. "></Question>
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
            <QuestionToggle title="10.1 - Melhoria Contínua">
              <QuestionContent description="A organização deve melhorar continuamente a pertinência, a adequação e a eficácia do sistema de gestão da segurança da informação. ">
                <Question id="7_pergunta_1_A" letter="A." question="A PSI prevê a necessidade de melhoria contínua do SGSI e estabelece as responsabilidades para isso?"></Question>
                <Question id="7_pergunta_1_B" letter="B." question="A organização planeja, executa, registra, verifica e atua em relação à melhoria contínua do SGSI, incluindo o estabelecimento de metas, métricas e ações corretivas ou preventivas?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (a) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Reagir à não conformidade e, conforme apropriado:">
                <Question id="7_pergunta_2_A" letter="A." question="A organização executa práticas para descoberta de não conformidades, como auditorias internas, auditorias externas, relatórios de GV ou pentests?"></Question>
                <Question id="7_pergunta_2_A" letter="B." question="Existe um planejamento e procedimento documentado para reagir às não conformidades, incluindo a definição de responsáveis, SLAs, prazos de verificação e planos de ação de acordo com a criticidade das não conformidades?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (a.1) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Reagir à não conformidade e, conforme apropriado: Tomar ações para controlá-la e corrigi-la;">
                <Question id="7_pergunta_3_A" letter="A." question="A organização tem um processo definido para controlar e corrigir não conformidades quando elas ocorrem?"></Question>
                <Question id="Existe um planejamento que define como reagir às não conformidades encontradas, incluindo responsáveis, SLAs, prazos de verificação, com base na criticidade?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (a.2) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Reagir à não conformidade e, conforme apropriado: Lidar com as consequências;">
                <Question id="7_pergunta_4_A" letter="A." question="Como a organização lida com as consequências? Há um processo ou fluxo definido?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (b) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Avaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios:">
                <Question id="7_pergunta_5_A" letter="A." question="A organização investiga e registra as análises de causa raiz das não conformidades?"></Question>
                <Question id="7_pergunta_5_A" letter="B." question="São estabelecidos planos de ação considerando a causa raiz dos problemas e desenvolvidas lições aprendidas a partir dessas investigações?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (b.1) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Avaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios: Analisando criticamente a não conformidade;">
                <Question id="7_pergunta_6_A" letter="A." question="A organização analisa criticamente a não conformidade?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (b.2) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Avaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios: Determinando as causas da não conformidade; e">
                <Question id="7_pergunta_7_A" letter="A." question="A organização detemrina as causas da não conformidade?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (b.3) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Avaliar a necessidade de ações para eliminar as causas de não conformidade, para evitar sua repetição ou ocorrência em outro lugar, por um dos seguintes meios: Determinando se não conformidades similares existem, ou se podem potencialmente ocorrer;">
                <Question id="7_pergunta_8_A" letter="A." question="Há um processo estabelecido para determinar se existe não conformidades similares, ou se podem potencialmente ocorrer em alguma instancia?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (c) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Implementar quaisquer ações necessárias;">
                <Question id="7_pergunta_9_A" letter="A." question="A organização traça planos de ação que sejam mensuráveis e comparáveis?"></Question>
                <Question id="7_pergunta_9_A" letter="B." question="São definidos prazos e responsabilidades para verificar a implementação dos planos de ação, incluindo ações para mitigar as não conformidades identificadas?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (d) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Analisar criticamente a eficácia de quaisquer ações corretivas tomadas; e">
                <Question id="7_pergunta_10_A" letter="A." question="A organização analisa criticamente a eficácia de quaisquer ações corretivas tomadas? Como?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (e) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Realizar mudanças no sistema de gestão da segurança da informação, quando necessário.">
                <Question id="7_pergunta_11_A" letter="A." question="Os resultados das análises de melhoria contínua são considerados na atualização do SGSI?"></Question>
                <Question id="7_pergunta_11_A" letter="B." question="A organização realiza mudanças no SGSI se necessário?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (f) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Natureza das não conformidades e quaisquer ações subsequentes tomadas; e">
                <Question id="7_pergunta_12_A" letter="A." question="As não conformidades são classificadas?"></Question>
                <Question id="7_pergunta_12_A" letter="B." question="As ações mitigatórias imediatas e as ações mitigatórias a longo prazo são descrita, correlacionadas e registradas e verificadas? Como?"></Question>
              </QuestionContent>
            </QuestionToggle>
            <QuestionToggle title="10.2 (g) - Não conformidade e ação corretiva">
              <QuestionContent description="Quando uma não conformidade ocorre, a organização deve: Resultados de qualquer ação corretiva.">
                <Question id="7_pergunta_13_A" letter="A." question="São criados planos de ação e próximos passos a partir das não conformidades encontradas?
                São estipulados prazos e SLAs para as correções? Esses prazos consideram a críticidade das não conformidades?
                A organização registra os resultados das ações corretivas?"></Question>
              </QuestionContent>
            </QuestionToggle>
          </QuestionsForm>
        </FormSection>
      )}

      <Footer></Footer>
    </Container>
  );
}