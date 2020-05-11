import React from "react";

import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfor,
  HomeDesc,
  HomeSpan,
  HomeBtn,
} from "./style";

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Lino</HomeTitle>
          <HomeInfor>Diretor Administrativo</HomeInfor>
          <HomeDesc>
            O maior escritório contábil <HomeSpan> do Brasil </HomeSpan>{" "}
            ajudando a impulsionar o crescimento da sua empresa
          </HomeDesc>
          <HomeBtn>Trocar de Contador</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
