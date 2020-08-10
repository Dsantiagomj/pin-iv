import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import FirebaseContext from "../../services/contexts/useFirebaseContext";
import UserContext from "../../services/contexts/useUserContext";
import { setToken } from "../../services/authentication";

import Form from "./form";

import Divider from "../../components/divider";
import { OutlinedButton } from "../../components/buttons";
import { TitleText, ParagraphText } from "../../components/typography";
import Logo from "../../components/logo";

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
  padding: 1rem;
  width 100%;
`;

const HelperText = styled.span`
  font-size: 0.75rem;
  margin: 0.5rem 0;
`;

const SignInComponent = ({ history }) => {
  const Firebase = useContext(FirebaseContext);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (email, password) => {
    try {
      const response = await Firebase.doSignInWithEmailAndPassword(
        email,
        password
      );
      const userData = JSON.stringify(response);
      setToken(userData);
      setUser(userData);
      history.replace("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await Firebase.doSignInWithGoogle(setToken, setUser, history);
    } catch (e) {
      console.error(e);
    }
  };

  const handleFacebookSignIn = async (event) => {
    event.preventDefault();
    try {
      await Firebase.doSignInWithFacebook(setToken, setUser, history);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ContentWrapper>
      <ParagraphText>
        <Logo type="black" height="90px" />
      </ParagraphText>
      <TitleText>Lee, comparte y debate lo que sucede ahora mismo</TitleText>

      <OutlinedButton onClick={handleGoogleSignIn} type="submit">
        Iniciar sesión con Google
      </OutlinedButton>
      <OutlinedButton onClick={handleFacebookSignIn} type="submit">
        Iniciar sesión con Facebook
      </OutlinedButton>
      <HelperText>O inicia sesión con tu cuenta</HelperText>

      <Form handleSubmit={handleSubmit} />
      <ParagraphText>
        No tienes cuenta? <Link to="/signup">Crea una ahora</Link>
      </ParagraphText>

      <Divider />
      <ParagraphText>2020. Privacy Policy © All rights reserved</ParagraphText>
    </ContentWrapper>
  );
};

export default SignInComponent;
