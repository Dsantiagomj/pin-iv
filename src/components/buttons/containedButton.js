import React from "react";
import styled from "styled-components";

const CButton = styled.button`
  background: #3a3a3a;
  border: solid 1px #3a3a3a;
  border-radius: 0.25rem;
  color: white;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 18rem;
  &:hover {
    cursor: pointer;
  }
`;

const ContainedButton = ({ children, type = "submit", onClick = null }) => (
  <CButton type={type} onClick={onClick}>
    {children}
  </CButton>
);

export default ContainedButton;
