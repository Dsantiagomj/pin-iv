import React from "react";
import { Route, Redirect } from "react-router-dom";

import { UserConsumer } from "../contexts/useUserContext";

const ProtectedRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    exact
    strict
    render={(props) => (
      <UserConsumer>
        {({ user }) => {
          if (user) {
            return <Component props={props} />;
          }
          return <Redirect to="/signin" />;
        }}
      </UserConsumer>
    )}
  />
);

export default ProtectedRoute;
