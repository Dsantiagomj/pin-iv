import React, { useState } from "react";
import { getToken } from "../authentication";

const UserContext = React.createContext();
export const { Consumer: UserConsumer, Provider } = UserContext;

export function UserProvider({ children }) {
  const localState = getToken();
  const [user, setUser] = useState(localState || null);

  const loginUser = (data) => setUser(data);
  const logOutUser = () => setUser(null);

  return (
    <Provider
      value={{
        user,
        setUser: loginUser,
        clearUser: logOutUser,
      }}
    >
      {children}
    </Provider>
  );
}

export default UserContext;
