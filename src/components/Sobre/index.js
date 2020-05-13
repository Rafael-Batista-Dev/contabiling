import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  SobreSection,
  Profile,
  Activity,
  Desc,
  ActivityBar,
  Title,
  SobreTitle,
  DescList,
  DescItem,
} from "./style";

const Sobre = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <SobreSection>
      <div className="container">
        <Activity>
          <ActivityBar data-aos="fade-right">
            <SobreTitle>Fazem a economia rodar.</SobreTitle>
            <Desc>
              “A nossa missão é democratizar a contabilidade para micro e
              pequenas empresas de todo o Brasil."
            </Desc>
          </ActivityBar>
        </Activity>

        <Profile data-aos="fade-left">
          <Title>A nossa história.</Title>
          <DescList>
            <DescItem>
              <i
                style={{
                  color: "#1e90ff",
                  fontSize: "20px",
                  marginRight: "1rem",
                }}
                className="fa fa-check"
                aria-hidden="true"
              ></i>
              A Exitus nasceu do sonho de revolucionar uma área que ainda é
              obscura para a maior parte dos empresários: a contabilidade. Como
              empreendedores, nós nos perguntávamos se isso não poderia ser
              diferente, mais simples, prático e fácil.
            </DescItem>

            <DescItem>
              <i
                style={{
                  color: "#1e90ff",
                  fontSize: "20px",
                  marginRight: "1rem",
                }}
                className="fa fa-check"
                aria-hidden="true"
              ></i>
              A nossa missão é democratizar a contabilidade para micro e
              pequenas empresas de todo o Brasil.
            </DescItem>

            <DescItem>
              <i
                style={{
                  color: "#1e90ff",
                  fontSize: "20px",
                  marginRight: "1rem",
                }}
                className="fa fa-check"
                aria-hidden="true"
              ></i>
              Acreditamos e trabalhamos muito para realizar o sonho de
              descomplicar a contabilidade e criar uma opção prática,
              transparente e acessível para os empresários que fazem a economia
              rodar.
            </DescItem>

            <DescItem>
              <i
                style={{
                  color: "#1e90ff",
                  fontSize: "20px",
                  marginRight: "1rem",
                }}
                className="fa fa-check"
                aria-hidden="true"
              ></i>
              A sua contabilidade pode ser mais simples e prática.
            </DescItem>
          </DescList>
        </Profile>
      </div>
    </SobreSection>
  );
};

export default Sobre;
