import React from "react";
import Lottie from "react-lottie";

import animationData from "../../assets/covid.json";

import {
  ProfileSection,
  Profile,
  Activity,
  ActivityDesc,
  ActivityBar,
  Title,
  SubTitle,
  Btn,
} from "./style";

const Sobre = () => {
  return (
    <ProfileSection>
      <div class="container">
        <Activity>
          <ActivityBar>
            <div className="lottie-json">
              <Lottie
                width={500}
                height={500}
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
        <Profile>
          <Title>Tudo sobre Coronavírus</Title>

          <SubTitle>Medidas Provisórias do Governo</SubTitle>

          <ActivityDesc>
            A Caixa Econômica Federal e o Sebrae anunciaram nesta segunda-feira
            (20) uma parceria para oferecer R$ 7,5 bilhões em crédito para
            microempreendedores individuais (MEI), micro e pequenas empresas. A
            medida é um auxílio para essas empresas em meio à pandemia do novo
            coronavírus, que paralisou serviços e negócios
          </ActivityDesc>
          <SubTitle>O que Muda para sua Empresa</SubTitle>

          <ActivityDesc>
            A reforma tributária do coronavírus: como a pandemia mudou (e ainda
            pode mudar) os impostos
          </ActivityDesc>

          <Btn>
            Saiba mais sobre o COVID-19{" "}
            <i
              style={{ marginLeft: "10px" }}
              class="fa fa-arrow-right"
              aria-hidden="true"
            ></i>
          </Btn>
        </Profile>
      </div>
    </ProfileSection>
  );
};

export default Sobre;
