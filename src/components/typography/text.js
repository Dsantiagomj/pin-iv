import React from "react";

import styled from "styled-components";

const Typography = styled.p`
  text-align: center;
  font-size: 0.75rem;
`;

const TextComponent = ({ children }) => <Typography>{children}</Typography>;

export default TextComponent;
