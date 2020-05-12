import styled from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #f0f5fa;
`;

export const WorkTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 4rem;
`;

export const Span = styled.span`
  font-weight: normal;
`;

export const WorkPart = styled.div`
  width: 21%;
  float: left;
  height: 80px;
  padding: 100px 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 1em #b5b5b5;
  -webkit-box-shadow: 0px 0px 1em #b5b5b5;
  -moz-box-shadow: 0px 0px 1em #b5b5b5;
  text-align: center;
  margin-left: 5%;
  margin-bottom: 4rem;
  margin-left: ${(props) => (props.first === 1 ? "0" : "5%")};
`;

export const Icon = styled.i`
  font-size: 35px;
  color: #1e90ff;
`;

export const PartTitle = styled.h4`
  font-size: 20px;
  color: #1e90ff;
  margin-bottom: 20px;
`;

export const Line = styled.hr`
  width: 60px;
  height: 2px;
  background: #1e90ff;
  margin: auto;
  border-radius: 5.5px;
`;
