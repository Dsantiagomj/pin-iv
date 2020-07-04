import React, { useContext } from "react";

import FirebaseContext from "../../services/contexts/useFirebaseContext";
import UserContext from "../../services/contexts/useUserContext";
import { setToken } from "../../services/authentication";

import Form from "./form";

const SignInComponent = ({ history }) => {
  const Firebase = useContext(FirebaseContext);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (email, password) => {
    try {
      const response = await Firebase.doSignInWithEmailAndPassword(
        email,
        password
      );
      const userData = JSON.stringify(response);
      setToken(userData);
      setUser(userData);
      history.replace("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await Firebase.doSignInWithGoogle(setToken, setUser, history);
    } catch (e) {
      console.error(e);
    }
  };

  const handleFacebookSignIn = async (event) => {
    event.preventDefault();
    try {
      await Firebase.doSignInWithFacebook(setToken, setUser, history);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <Form
        handleSubmit={handleSubmit}
        handleGoogleSignIn={handleGoogleSignIn}
        handleFacebookSignIn={handleFacebookSignIn}
      />
    </>
  );
};

export default SignInComponent;
