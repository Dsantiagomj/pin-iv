import React, { useContext } from "react";
import FirebaseContext from "../../services/contexts/useFirebaseContext";

import Form from "./form";

const SignUpComponent = () => {
  const Firebase = useContext(FirebaseContext);

  const handleSubmit = async (email, password) => {
    const response = await Firebase.doCreateUserWithEmailAndPassword(
      email,
      password
    );
    console.log(response);
  };

  return (
    <>
      <h1>Sign up</h1>
      <Form handleSubmit={handleSubmit} />
    </>
  );
};

export default SignUpComponent;
