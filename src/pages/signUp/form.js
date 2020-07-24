import React, { useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";

import { ContainedButton } from "../../components/buttons";

import { TextInput, EmailInput, PasswordInput } from "../../components/input";

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

const SignUpForm = ({ handleSubmit }) => {
  const [passwordState, setpasswordState] = useState("password");
  const onSubmit = (values) => {
    handleSubmit(values.email, values.password);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => (
        <Form>
          <Wrapper>
            <InputWrapper>
              <TextInput
                text="name"
                placeholder="Nombre completo"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <EmailInput
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <PasswordInput
                passwordType={passwordState}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <PasswordInput
                isConfirmPassword={true}
                passwordType={passwordState}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </InputWrapper>

            <ContainedButton type="submit">Crear cuenta</ContainedButton>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
