import React from "react";
import { Route, Redirect } from "react-router-dom";

import { UserConsumer } from "../contexts/useUserContext";

const InitialRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    exact
    strict
    render={(props) => (
      <UserConsumer>
        {({ user }) => {
          if (!user) {
            return <Component props={props} />;
          }
          return <Redirect to={props.history.goBack() || "/"} />;
        }}
      </UserConsumer>
    )}
  />
);

export default InitialRoute;
