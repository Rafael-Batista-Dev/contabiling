import styled from "styled-components";

export const PortfolioSection = styled.div`
  background: #fff;
  padding-top: 20px;
  overflow: hidden;
`;

export const PortfolioTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Span = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #424242;
`;

export const List = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0;
`;

export const PortfolioItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;
  background: ${(props) => (props.active ? "#1e90ff" : "")};
  color: ${(props) => (props.active ? "#FFF" : "#000")};
`;

export const Box = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 3.9));
  font-size: 15px;
  opacity: 0;
`;

export const OverlaySpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background: #1e90ff;
  color: #fff;
  font-size: 15px;
  text-align: center;
  display: block;
  width: 30%;
  margin: 0 auto;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  font-weight: bold;
  &:hover {
    background: #fff;
    color: #1e90ff;
    box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.07),
      0 1px 7px 0 rgba(0, 0, 0, 0.02), 0 3px 1px -1px rgba(0, 0, 0, 0.1);
  }
`;
