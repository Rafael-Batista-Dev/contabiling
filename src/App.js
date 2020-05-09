import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Contato from "./components/Contato";
import Index from "./components/Index";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contato" component={Contato} />
      </BrowserRouter>
    );
  }
}
