import React from "react";

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
  ActivityTitle,
  ActivityPerc,
  ActivityParent,
  ParentSpan,
  Title,
} from "./style";

const Sobre = () => {
  return (
    <ProfileSection>
      <div class="container">
        <Profile>
          <Title>
            <Span>Sobre </Span> Nós
          </Title>
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
          <Title>
            Atividade <Span>Fiscais</Span>
          </Title>
          <ActivityDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </ActivityDesc>
          <ActivityBar>
            <ActivityTitle>NFE</ActivityTitle>
            <ActivityPerc>100%</ActivityPerc>
            <ActivityParent>
              <ParentSpan></ParentSpan>
            </ActivityParent>
          </ActivityBar>

          <ActivityBar>
            <ActivityTitle>MFE</ActivityTitle>
            <ActivityPerc>90%</ActivityPerc>
            <ActivityParent>
              <ParentSpan></ParentSpan>
            </ActivityParent>
          </ActivityBar>

          <ActivityBar>
            <ActivityTitle>SPEED FISCAL</ActivityTitle>
            <ActivityPerc>80%</ActivityPerc>
            <ActivityParent>
              <ParentSpan></ParentSpan>
            </ActivityParent>
          </ActivityBar>
        </Activity>
      </div>
    </ProfileSection>
  );
};

export default Sobre;
