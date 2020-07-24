import React from "react";
import styled from "styled-components";

const OButton = styled.button`
  background: transparent;
  border: solid 1px #3a3a3a;
  border-radius: 0.25rem;
  color: #3a3a3a;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 18rem;
  &:hover {
    background-color #3a3a3a;
    color: white;
    cursor: pointer;
  }
`;

const OutlinedButton = ({ children, onClick }) => (
  <OButton onClick={onClick}>{children}</OButton>
);

export default OutlinedButton;
