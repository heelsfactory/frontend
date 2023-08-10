import React, {useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch, useSelector} from "react-redux"
import { LoginUser } from '../../Features/Authentication/loginSlice';
import CustomSpinner from '../CustomSpinner';
import { Link, useNavigate } from "react-router-dom"
import { login } from '../../Features/Authentication/loginSlice';

import {
    Form,
    FormContent,
    FormWrap,
    Icon,
    Container,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    Accent,
  } from "./LoginElements";

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputError, setInputError] = useState("");
  const {loading, response, isSuccessful} = useSelector((state)=> state.login)


  

  const loginHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return setInputError("Please fill the required fields");
    }
    const data = {
      username,
      password,
      navigate,
      dispatch
     
    };
    dispatch(LoginUser(data));
   
  };


  

  return (
    <>
    <Container>
      <ToastContainer />
      <FormWrap>
        <Icon to="/"> Heels Factory</Icon>
        <br />
        <br />
        <br />

        <FormContent>
          <Form  onSubmit={loginHandler} >
            <FormH1> Hi, Ramatu. Please Sign in</FormH1>
            {/* <FormLabel htmlFor="for">Username</FormLabel> */}
            <FormInput
              type="text"
              required
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            {/* <FormLabel htmlFor="for">Password</FormLabel> */}
            <FormInput
              type="password"
              required
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <FormButton type="submit">
              {loading ? <CustomSpinner /> : "Continue"}
              </FormButton>
            {/* <Text>
              Don't have an account? <Accent to="/signup">Sign up</Accent>
            </Text> */}
          </Form>
        </FormContent>
      </FormWrap>
      {/* <Footer /> */}
    </Container>
  </>
  )
}

export default Login