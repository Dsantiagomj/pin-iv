import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import UserContext from "../services/contexts/useUserContext";

const ContentWrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  width: 100vw;
`;

const Header = styled.div`
  align-items: center;
  background: white;
  border-bottom: solid 1px #eceff2;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  margin-bottom: 5rem;
  overflow: hidden;
  padding: 0 1rem;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

const AppInfo = styled.div``;
const UserInfo = styled.div`
  align-items: center;
  display: flex;
`;
const UserImage = styled.img`
  border-radius: 50%;
  height: 50px;
  margin-top: 1rem;
  width 50px;
`;
const UserText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 1rem;
`;

const LogOut = styled.div`
  color: red;
  margin-left: 1rem;
  &:hover {
    color: darkred;
  }
  @media (min-width: 768px) {
    margin-left: 5rem;
  }
`;

const Dashboard = ({ component: Component, props }) => {
  const { user } = useContext(UserContext);
  const { user: userData } = JSON.parse(user);

  return (
    <ContentWrapper>
      <Header>
        <AppInfo>LOGO</AppInfo>
        <UserInfo>
          <UserImage src={userData.photoURL} alt="profile" loading="lazy" />
          <UserText>{userData.displayName}</UserText>
          <Link to="/signout">
            <LogOut>
              <FiLogOut />
            </LogOut>
          </Link>
        </UserInfo>
      </Header>
      <Component props={props} />
    </ContentWrapper>
  );
};

export default Dashboard;
