import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import styled from "styled-components";

import { ContainedButton } from "../../components/buttons";

import { EmailInput, PasswordInput } from "../../components/input";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const SignInForm = ({ handleSubmit }) => {
  const [passwordState, setpasswordState] = useState("password");

  const onSubmit = (values) => {
    handleSubmit(values.email, values.password);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {(formik) => (
        <Form style={{ width: "100%" }}>
          <Wrapper>
            <InputWrapper>
              <EmailInput
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <PasswordInput
                passwordType={passwordState}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </InputWrapper>
            <Link to="/">Olvide mi contraseña</Link>

            <ContainedButton type="submit">Iniciar sesión</ContainedButton>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
