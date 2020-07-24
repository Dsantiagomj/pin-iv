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
  height: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 20rem;
`;

const TextInput = ({ text, onChange, value, placeholder }) => (
  <>
    <Label>{text}</Label>
    <Input
      type="text"
      name={text}
      placeholder={placeholder}
      id={text}
      onChange={onChange}
      value={value}
    />
  </>
);

export default TextInput;
