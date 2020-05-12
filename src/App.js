import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Servicos from "./pages/Servicos";
import Galeria from "./pages/Galeria";
import SobreNos from "./pages/SobreNos";
import Index from "./pages/";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/sobre" component={SobreNos} />
      </BrowserRouter>
    );
  }
}
