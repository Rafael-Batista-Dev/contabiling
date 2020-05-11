import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/homeoffice.json";

import {
  ProfileSection,
  Profile,
  ProfileList,
  ProfileItem,
  Span,
  Web,
  Activity,
  ActivityDesc,
  ActivityBar,
  Title,
  SubTitle,
} from "./style";

const Sobre = () => {
  return (
    <ProfileSection>
      <div class="container">
        <Profile>
          <Title>
            Sobre <Span>Nós</Span>
          </Title>
          <ActivityDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quos praesentium
            blanditiis esse cupiditate, omnis similique. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Quos praesentium blanditiis esse
            cupiditate, omnis similique. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis
            similique.
          </ActivityDesc>
          <SubTitle>Medidas Provisórias do Governo</SubTitle>

          <ActivityDesc>
            A Caixa Econômica Federal e o Sebrae anunciaram nesta segunda-feira
            (20) uma parceria para oferecer R$ 7,5 bilhões em crédito para
            microempreendedores individuais (MEI), micro e pequenas empresas.
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
