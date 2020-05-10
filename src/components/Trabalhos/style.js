import styled from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`;

export const WorkTitle = styled.h2`
  font-size: 60px;
`;

export const Span = styled.span`
  font-weight: normal;
`;

export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 1em #b5b5b5;
  -webkit-box-shadow: 0px 0px 1em #b5b5b5;
  -moz-box-shadow: 0px 0px 1em #b5b5b5;
  text-align: center;
  margin-left: 5%;
  margin-left: ${(props) => (props.first === 1 ? "0" : "5%")};
`;

export const Icon = styled.i`
  font-size: 60px;
  color: #888;
  margin-bottom: 20px;
`;

export const PartTitle = styled.h4`
  font-size: 25px;
  color: #1e90ff;
  margin-bottom: 20px;
`;

export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;

export const PartDesc = styled.p`
  font-size: 16px;
  color: #888;
  padding: 20px;
`;
