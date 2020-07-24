import React from "react";
import { Route, Redirect } from "react-router-dom";

import { UserConsumer } from "../contexts/useUserContext";
import InitialPage from "../../templates/initialPages";

const InitialRoute = ({ component, path }) => (
  <Route
    path={path}
    exact
    strict
    render={(props) => (
      <UserConsumer>
        {({ user }) => {
          if (!user) {
            return <InitialPage props={props} component={component} />;
          }
          return <Redirect to={props.history.goBack() || "/"} />;
        }}
      </UserConsumer>
    )}
  />
);

export default InitialRoute;
