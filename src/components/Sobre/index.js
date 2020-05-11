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

          <ProfileList>
            <ProfileItem>
              <Span>Diretor</Span>
              Lino
            </ProfileItem>
            <ProfileItem>
              <Span>Fundação</Span>
              02/3/1986
            </ProfileItem>
            <ProfileItem>
              <Span>Endereço</Span>
              Av. Universitária Nº 230
            </ProfileItem>
            <ProfileItem>
              <Span>Telefone</Span>
              (88) 3511 6006
            </ProfileItem>
            <ProfileItem>
              <Span>Email</Span>
              exitus@admin.com
            </ProfileItem>
            <ProfileItem>
              <Span>Web</Span>
              <Web>www.exitus.com</Web>
            </ProfileItem>
          </ProfileList>
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
