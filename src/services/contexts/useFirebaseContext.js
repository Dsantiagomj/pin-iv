import React from "react";

const FirebaseContext = React.createContext();
export const { Consumer: FirebaseConsumer, Provider } = FirebaseContext;

export function FirebaseProvider({ value, children }) {
  return <Provider value={value}>{children}</Provider>;
}

export default FirebaseContext;
