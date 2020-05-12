import React from "react";

import {
  ServicesSection,
  ServicesRight,
  ServicesLeft,
  ServicesDesc,
  ServicesBar,
  Title,
  SubTitle,
  Btn,
} from "./style";

const Servicos = () => {
  return (
    <ServicesSection>
      <div class="container">
        <Title>Serviços da Exitus</Title>
        <ServicesLeft>
          <ServicesBar>
            <SubTitle>Contador online</SubTitle>
            <ServicesDesc>
              Deixe seu CNPJ regularizado com nosso serviço de contabilidade
              digital para autônomos, freelancers e empresas de comércio e
              serviços. Automatizamos processos e disponibilizamos informações
              em tempo real para facilitar a gestão da sua empresa com a
              experiência de contadores reais.
            </ServicesDesc>
            <SubTitle>Suporte especializado</SubTitle>
            <ServicesDesc>
              Ao contratar a Contabilizei como seu contador online, você conta
              com atendimento de mais de 350 especialistas. A comunicação é
              realizada via chat, mas você também pode optar por comunicação via
              whatsapp e/ou telefone. Consulte nossos planos e veja qual atende
              melhor sua necessidade.
            </ServicesDesc>
          </ServicesBar>
        </ServicesLeft>

        <ServicesRight>
          <SubTitle>Abertura de empresa</SubTitle>
          <ServicesDesc>
            Realizamos o processo de abertura de empresa grátis. Estamos aqui
            para ajudar a escolher o melhor formato de empresa para o seu perfil
            e desenvolver toda a documentação necessária para você não ter
            preocupações.
          </ServicesDesc>
          <SubTitle style={{ marginTop: "3rem" }}>
            Calendário de rotinas, Speed e Escrita Fiscais
          </SubTitle>

          <ServicesDesc>
            Fique por dentro das obrigações contábeis da sua empresa na página
            inicial da plataforma online. Também informamos sempre que uma ação
            sua for necessária, como pagamento de tributos, importação de notas
            e informações atualizadas.
          </ServicesDesc>

          <Btn>
            Saiba mais <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </Btn>
        </ServicesRight>
      </div>
    </ServicesSection>
  );
};

export default Servicos;
