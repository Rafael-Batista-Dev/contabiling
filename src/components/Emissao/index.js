import React, { useEffect } from "react";
import Lottie from "react-lottie";
import Aos from "aos";
import "aos/dist/aos.css";

import animationData from "../../assets/fiscal.json";

import {
  EmissaoSection,
  EmissaoRow,
  Span,
  LottieRow,
  EmisaoDesc,
  LottieBar,
  Title,
  SubTitle,
  SpanContainer,
} from "./style";

const Emissao = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <EmissaoSection data-aos="fade-down">
      <div className="container">
        <EmissaoRow>
          <Title>Emissão de notas fiscais do jeito que você quis</Title>
          <SubTitle>Importação automática:</SubTitle>
          <EmisaoDesc>
            Você emite suas notas fiscais pelo portal da Prefeitura e pronto.
            Nós faremos a importação das notas e o cálculo dos seus impostos.
          </EmisaoDesc>

          <SubTitle>Emissor gratuito:</SubTitle>
          <EmisaoDesc>
            Para as cidades liberadas, a emissão de notas fiscais podem ser
            feitas pela nossa plataforma. Em até 2 cliques.
          </EmisaoDesc>

          <SpanContainer>
            <SubTitle>NFE</SubTitle>
            <Span>15K +</Span>
          </SpanContainer>
          <SpanContainer>
            <SubTitle>MDFE</SubTitle>
            <Span>7.5K +</Span>
          </SpanContainer>
          <SpanContainer>
            <SubTitle>MFE</SubTitle>
            <Span>1.2K +</Span>
          </SpanContainer>
        </EmissaoRow>

        <LottieRow>
          <LottieBar>
            <div className="lottie-json">
              <Lottie
                width={400}
                height={400}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              ></Lottie>
            </div>
          </LottieBar>
        </LottieRow>
      </div>
    </EmissaoSection>
  );
};

export default Emissao;
