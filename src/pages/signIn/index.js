import React, { useContext } from "react";

import FirebaseContext from "../../services/contexts/useFirebaseContext";
import Form from "./form";

const SignInComponent = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  const handleSubmit = async (email, password) => {
    const response = await Firebase.doSignInWithEmailAndPassword(
      email,
      password
    );
    console.log(response);
  };

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    await Firebase.doSignInWithGoogle();
  };

  const handleFacebookSignIn = async (event) => {
    event.preventDefault();
    await Firebase.doSignInWithFacebook();
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
