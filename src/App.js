import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Servicos from "./pages/Servicos";
import Portifolio from "./pages/Portifolio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Index from "./components/Index";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/portifolio" component={Portifolio} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
      </BrowserRouter>
    );
  }
}
