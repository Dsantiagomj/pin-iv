import React from "react";
import { Router } from "./services/router";
import { FirebaseProvider } from "./services/contexts/useFirebaseContext";
import { UserProvider } from "./services/contexts/useUserContext";

function App() {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </FirebaseProvider>
  );
}

export default App;
