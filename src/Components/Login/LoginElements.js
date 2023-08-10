import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 829px;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    #770267 0%,
    #c908cf 100%
  );
  @media screen and (max-width: 400px) {
    min-height: 829px;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;

  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
    margin-bottom: 70px;
  }

  &:hover{
      color: #000;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
 
    padding: 20px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 480px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 70px 28px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
 
  }
`;

export const FormH1 = styled.h1`
  margin-bottom:30px;
    color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-size: 17px;

`;

export const FormButton = styled.button`
  background: #800080;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-aling: center;
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
`;

export const Accent = styled(Link)`
  color: #9d04b1;
  font-size: 15px;
`