import React from "react";

import styled from "styled-components";

const Typograpy = styled.h1`
  font-size: 1.5rem;
  max-width: 27rem;
  text-align: center;
`;

const Title = ({ children }) => <Typograpy>{children}</Typograpy>;

export default Title;
