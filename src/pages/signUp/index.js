import React, { useContext } from "react";
import FirebaseContext from "../../services/contexts/useFirebaseContext";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Form from "./form";

import Divider from "../../components/divider";
import Logo from "../../components/logo";
import { TitleText, ParagraphText } from "../../components/typography";

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

const SignUpComponent = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  const handleSubmit = async (email, password) => {
    const response = await Firebase.doCreateUserWithEmailAndPassword(
      email,
      password
    );
    console.log(response);
    window.location.replace("/");
  };

  return (
    <>
      <ContentWrapper>
        <ParagraphText>
          <Logo type="black" height="90px" />
        </ParagraphText>
        <TitleText>Lee, comparte y debate lo que sucede ahora mismo</TitleText>

        <Form handleSubmit={handleSubmit} />
        <ParagraphText>
          Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link>
        </ParagraphText>

        <Divider />
        <ParagraphText>
          2020. Privacy Policy © All rights reserved
        </ParagraphText>
      </ContentWrapper>
    </>
  );
};

export default SignUpComponent;
