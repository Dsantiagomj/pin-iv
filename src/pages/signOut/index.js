import React, { useEffect, useContext } from "react";

import { removeToken } from "../../services/authentication";
import UserContext from "../../services/contexts/useUserContext";

const SignOut = ({ history }) => {
  const { clearUser } = useContext(UserContext);
  useEffect(() => {
    clearUser();
    removeToken();
    history.replace("/signin");
  });
  return <div />;
};

export default SignOut;
