import styled from "styled-components";

export const ServicesSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
  background: #f0f5fa;
`;
export const ServicesRight = styled.div`
  width: 45%;
  float: right;
`;

export const ServicesLeft = styled.div`
  width: 45%;
  float: left;
`;

export const ServicesDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
`;

export const ServicesBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #424242;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #424242;
`;

export const Btn = styled.button`
  background: #1e90ff;
  color: #fff;
  font-size: 18px;
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 20px;
  height: 50px;
  line-height: 40px;
  border-radius: 28px;
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
