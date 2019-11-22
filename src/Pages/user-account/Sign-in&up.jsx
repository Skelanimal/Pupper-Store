import React from "react";

import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in&up-style.scss";

const SignInAndUp = () => (
  <div className="signInAndUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndUp;
