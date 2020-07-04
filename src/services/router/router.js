import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "./routes";
import ProtectedRoute from "./protectedRoute";

const Router = () => (
  <Switch>
    {routes.map((route) => {
      if (route.routeType === "public") {
        return (
          <Route path={route.path} component={route.component} key={route.id} />
        );
      }
      if (route.routeType === "protected") {
        return (
          <ProtectedRoute
            key={route.id}
            component={route.component}
            path={route.path}
          />
        );
      }
    })}
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>
  </Switch>
);

export default Router;
