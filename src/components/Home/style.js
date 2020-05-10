import styled from "styled-components";
/*
    ===============================
            Home Styled
    ===============================
*/
export const HomeSection = styled.div`
  height: 658px;
  background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 3.9)),
    url(../images/Home/home-bg.jpg) no-repeat center center/cover;
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`;

export const HomeInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeTitle = styled.h2`
  margin-top: 10rem;
  font-size: 60px;
  font-weight: bold;
  color: #1e90ff;
`;

export const HomeInfor = styled.h4`
  margin-top: -2rem;
  font-size: 35px;
  color: #fff;
  margin-bottom: 20px;
`;
export const HomeDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 20px;
`;
export const HomeSpan = styled.span`
  color: #1e90ff;
  font-weight: bold;
`;
export const HomeBtn = styled.button`
  background: #1e90ff;
  color: #fff;
  font-size: 18px;
  border: 0;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #fff;
    color: #1e90ff;
  }
`;
