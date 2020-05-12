import React from "react";
import Lottie from "react-lottie";

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
} from "./style";

const Sobre = () => {
  return (
    <ProfileSection>
      <div className="container">
        <Profile>
          <Title>
            Sobre <Span>Nós</Span>
          </Title>
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
        </Profile>

        <Activity>
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

export default Sobre;
