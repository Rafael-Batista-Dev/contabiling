import React from "react";
import { Link } from "react-router-dom";

import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
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
            <Anchor href="/trabalhos">Trabalhos</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/portfolio">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/resumo">Resumo</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/sobre">Sobre</Anchor>
          </ListItem>
          <ListItem>
            <Link className="anchor" to="/contato">
              Contato
            </Link>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default NavBar;
