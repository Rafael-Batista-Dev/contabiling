import styled from "styled-components";

export const ServicesSection = styled.div`
  padding: 8rem 0;
  overflow: hidden;
  background: #f0f5fa;
`;
export const HeadForm = styled.div`
  background: #1e90ff;
  margin-bottom: 2rem;
  border-radius: 8px;
  height: 80px;
`;

export const FormRow = styled.div`
  width: 50%;
  margin: auto;
  margin-top: -2.2rem;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 1em #bdbdbd;
  -webkit-box-shadow: 0px 0px 1em #bdbdbd;
  -moz-box-shadow: 0px 0px 1em #bdbdbd;
`;

export const FormContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;

export const Title = styled.h1`
  font-size: 28px;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

export const Btn = styled.button`
  background: #1e90ff;
  color: #fff;
  font-size: 18px;
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
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
