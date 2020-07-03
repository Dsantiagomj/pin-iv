import React from "react";
import { Formik, Form } from "formik";

const SignUpForm = ({ handleSubmit }) => {
  const onSubmit = (values) => {
    handleSubmit(values.email, values.password);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => (
        <Form>
          <label htmlFor="email"> Email </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label> Password </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
