import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../services/contexts/useUserContext";

const DashboardComponent = ({ history }) => {
  const { user } = useContext(UserContext);
  const { user: userData } = JSON.parse(user);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome back {userData.displayName}</p>
      <img
        src={userData.photoURL}
        alt="profile"
        width="400px"
        height="400px"
        loading="lazy"
      />
      <div>
        <Link to="/signout">Sign Out</Link>
      </div>
    </>
  );
};

export default DashboardComponent;
