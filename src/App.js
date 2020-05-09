import React, { Component } from "react";
import "./App.css";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Navbar from "./components/Navbar";
import Contato from "./components/Contato";
import Perfil from "./components/Perfil";
import Portfolio from "./components/Portfolio";
import RedesSociais from "./components/RedesSociais";
import Trabalhos from "./components/Trabalhos";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Trabalhos />
        <Portfolio />
        <Perfil />
        <Sobre />
        <RedesSociais />
        <Contato />
        <Footer />
      </div>
    );
  }
}
