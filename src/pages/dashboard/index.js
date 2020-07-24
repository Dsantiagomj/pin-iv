import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../services/contexts/useUserContext";

import { TitleText } from "../../components/typography";

const DashboardComponent = ({ history }) => {
  const { user } = useContext(UserContext);
  const { user: userData } = JSON.parse(user);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleText>EN CONSTRUCCION</TitleText>
    </div>
  );
};

export default DashboardComponent;
