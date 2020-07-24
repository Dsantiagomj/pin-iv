import React from "react";
import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const Input = styled.input`
  border: solid 1px #eceff2;
  font-size: 1rem;
  height: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 20rem;
`;

const PasswordInput = ({
  passwordType,
  isConfirmPassword,
  onChange,
  value,
}) => (
  <>
    <Label>password</Label>
    <Input
      type={passwordType}
      name={isConfirmPassword ? "confirmPassword" : "password"}
      id={isConfirmPassword ? "confirmPassword" : "password"}
      placeholder={isConfirmPassword ? "Confirmar contraseña" : "Contraseña"}
      onChange={onChange}
      value={value}
    />
  </>
);

export default PasswordInput;
