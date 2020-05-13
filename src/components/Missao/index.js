import React, { useEffect } from "react";
import Lottie from "react-lottie";
import Aos from "aos";
import "aos/dist/aos.css";

import animationData from "../../assets/homeoffice.json";

import {
  ProfileSection,
  Profile,
  Span,
  Activity,
  ActivityDesc,
  ActivityBar,
  Title,
  SubTitle,
  SpanContainer,
} from "./style";

const Missao = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ProfileSection>
      <div className="container">
        <Profile data-aos="fade-right">
          <Title>Missão</Title>
          <ActivityDesc>
            Exitus é uma startup que oferece os serviços de um escritório de
            contabilidade online a um preço reduzido. Online é a forma como
            entregamos o serviço para os nossos clientes, mas as obrigações do
            contador online são as mesmas de um contador de um escritório
            tradicional.
          </ActivityDesc>

          <ActivityDesc>
            A contabilidade online é o resultado da união da contabilidade com a
            tecnologia e com a paixão dos nossos contadores. A tecnologia já
            mudou a forma como nos relacionamos com o transporte, com delivery e
            até mesmo como nos comunicamos, nada mais natural que a
            contabilidade também mude.
          </ActivityDesc>
          <SpanContainer>
            <SubTitle>ESPECIALISTAS</SubTitle>
            <Span>450 +</Span>
          </SpanContainer>
          <SpanContainer>
            <SubTitle>CLIENTES</SubTitle>
            <Span>2.5 + K</Span>
          </SpanContainer>
          <SpanContainer>
            <SubTitle>ESCRITÓRIOS</SubTitle>
            <Span>FORTALEZA</Span>
          </SpanContainer>
        </Profile>

        <Activity data-aos="fade-left">
          <ActivityBar>
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
          </ActivityBar>
        </Activity>
      </div>
    </ProfileSection>
  );
};

export default Missao;
