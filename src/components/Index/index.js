import React, { Component } from "react";

import Home from "../../components/Home";
import Sobre from "../../components/Sobre";
import Resumo from "../../components/Resumo";
import Portfolio from "../../components/Portfolio";
import RedesSociais from "../../components/RedesSociais";
import Trabalhos from "../../components/Trabalhos";
import Footer from "../../components/Footer";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Trabalhos />
        <Portfolio />
        <Sobre />
        <Resumo />
        <RedesSociais />
        <Footer />
      </div>
    );
  }
}
