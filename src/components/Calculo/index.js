import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/emissao.json";

import {
  CalcSection,
  CalcContainer,
  CalcList,
  CalcItem,
  LottieSection,
  CalcDesc,
  LottieBar,
  Title,
} from "./style";

const Calculo = () => {
  return (
    <CalcSection>
      <div className="container">
        <CalcContainer>
          <Title>Cálculo e emissão de impostos</Title>
          <CalcDesc>
            Gerenciamento: controle as guias pagas e pendentes pela nossa
            plataforma.
          </CalcDesc>

          <CalcDesc>
            <CalcList>
              <CalcItem>
                <i
                  style={{
                    color: "#1e90ff",
                    fontSize: "20px",
                    marginRight: "1rem",
                  }}
                  className="fa fa-check"
                  aria-hidden="true"
                ></i>{" "}
                Vamos calcular seus impostos e disponibilizar as suas guias.
              </CalcItem>
              <CalcItem>
                <i
                  style={{
                    color: "#1e90ff",
                    fontSize: "20px",
                    marginRight: "1rem",
                  }}
                  className="fa fa-check"
                  aria-hidden="true"
                ></i>{" "}
                Nunca perca uma data: te avisamos quando a guia está disponível.
              </CalcItem>
            </CalcList>
          </CalcDesc>
        </CalcContainer>

        <LottieSection>
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
        </LottieSection>
      </div>
    </CalcSection>
  );
};

export default Calculo;
