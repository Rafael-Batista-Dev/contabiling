import React, { useEffect } from "react";
import Lottie from "react-lottie";
import Aos from "aos";
import "aos/dist/aos.css";

import animationData from "../../assets/controle.json";

import {
  ControlSection,
  ControlRow,
  LottieRow,
  ControlDesc,
  LottieBar,
  Title,
  SubTitle,
} from "./style";

const Controle = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ControlSection>
      <div class="container">
        <LottieRow data-aos="fade-right">
          <LottieBar>
            <div className="lottie-json">
              <Lottie
                width={300}
                height={300}
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

        <ControlRow data-aos="fade-left">
          <Title>Controle de movimentação financeira</Title>

          <SubTitle>Plataforma intuitiva e fácil de usar:</SubTitle>

          <ControlDesc>
            Emissor de notas gratuito, controle de impostos e muito mais.
          </ControlDesc>
          <SubTitle>Conte com a gente:</SubTitle>

          <ControlDesc>
            Suporte e atendimento para quando você precisar.
          </ControlDesc>

          <SubTitle>Economia real: </SubTitle>
          <ControlDesc>Planos a partir de R$89/mês.</ControlDesc>
        </ControlRow>
      </div>
    </ControlSection>
  );
};

export default Controle;
