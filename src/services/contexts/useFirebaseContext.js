import React from "react";

import Firebase from "../firebase";
const FirebaseContext = React.createContext();
export const { Consumer: FirebaseConsumer, Provider } = FirebaseContext;

export function FirebaseProvider({ children }) {
  return <Provider value={new Firebase()}>{children}</Provider>;
}

export default FirebaseContext;
