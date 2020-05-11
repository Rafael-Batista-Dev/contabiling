import React, { Component } from "react";

import Home from "../../components/Home";
import Sobre from "../../components/Sobre";
import Resumo from "../../components/Resumo";
import Portfolio from "../../components/Portfolio";
import Informativo from "../../components/Informativo";
import RedesSociais from "../../components/RedesSociais";
import Servicos from "../../components/Servicos";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Resumo />
        <Informativo />
        <RedesSociais />
        <Contato />
        <Footer />
      </div>
    );
  }
}
