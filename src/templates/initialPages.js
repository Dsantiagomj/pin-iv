import React from "react";

import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ContentItem = styled.div`
  background-image: ${(props) =>
    props.lgOnly ? "url(/signin-desktop.jpg)" : "none"};
  background-size: cover;
  display: ${(props) => (props.lgOnly ? "none" : "block")};
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
  }
`;

const InitialPage = ({ component: Component, ...props }) => {
  return (
    <ContentWrapper>
      <ContentItem lgOnly={true} />
      <ContentItem>
        <Component props={props} />
      </ContentItem>
    </ContentWrapper>
  );
};

export default InitialPage;
