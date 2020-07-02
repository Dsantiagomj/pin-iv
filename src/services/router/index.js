import React from "react";
import { Router } from "@reach/router";

import DashboardPage from "../../pages/dashboard";
import SignInPage from "../../pages/signIn";
import SignUpPage from "../../pages/signUp";

function AppRouter() {
  return (
    <Router>
      <SignInPage path="/signin" />
      <SignUpPage path="/signup" />
      <DashboardPage path="/" />
    </Router>
  );
}

export default AppRouter;
