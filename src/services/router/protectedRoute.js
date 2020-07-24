import React from "react";
import { Route, Redirect } from "react-router-dom";

import { UserConsumer } from "../contexts/useUserContext";

import Dashboard from "../../templates/dashboard";

const ProtectedRoute = ({ component, path }) => (
  <Route
    path={path}
    exact
    strict
    render={(props) => (
      <UserConsumer>
        {({ user }) => {
          if (user) {
            return <Dashboard props={props} component={component} />;
          }
          return <Redirect to="/signin" />;
        }}
      </UserConsumer>
    )}
  />
);

export default ProtectedRoute;
