import React, { Component } from "react";

import Home from "../components/Home";
import Missao from "../components/Missao";
import Resumo from "../components/Resumo";
import Informativo from "../components/Informativo";
import Servicos from "../components/Servicos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Missao />
        <Servicos />
        <Resumo />
        <Informativo />
        <Contato />
        <Footer />
      </div>
    );
  }
}
