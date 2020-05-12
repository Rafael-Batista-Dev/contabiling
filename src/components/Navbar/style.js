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

export const Btn = styled.button`
  background: #1e90ff;
  color: #fff;
  font-size: 18px;
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  height: 45px;
  line-height: 40px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: #fff;
    color: #1e90ff;
    box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.07),
      0 1px 7px 0 rgba(0, 0, 0, 0.02), 0 3px 1px -1px rgba(0, 0, 0, 0.1);
  }
`;
