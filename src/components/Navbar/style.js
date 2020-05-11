import styled from "styled-components";

export const NavbarSection = styled.div`
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 4;
  box-shadow: 0px 0px 1em #666;
  -webkit-box-shadow: 0px 0px 1em #666;
  -moz-box-shadow: 0px 0px 1em #666;
`;

export const Logo = styled.div`
  width: 50%;
  float: left;
`;
export const LogoText = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline-block;
`;

export const Anchor = styled.a`
  display: block;
  color: #424242;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #1e90ff;
  }
`;
