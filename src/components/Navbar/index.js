import React from "react";
import { Link } from "react-router-dom";

import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Btn,
} from "./style.js";

const NavBar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Exitus Contabilidade</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <Link className="anchor" to="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link className="anchor" to="/Servicos">
              Serviços
            </Link>
          </ListItem>
          <ListItem>
            <Link className="anchor" to="/galeria">
              Portfolio
            </Link>
          </ListItem>
          <ListItem>
            <Link className="anchor" to="/sobre">
              Sobre
            </Link>
          </ListItem>
          <ListItem>
            <Link className="anchor" to="/tracar-contador">
              Trocar de Contador
            </Link>
          </ListItem>
          <ListItem>
            <Btn>Login</Btn>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default NavBar;
