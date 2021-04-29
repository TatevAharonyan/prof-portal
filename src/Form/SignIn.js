import React from "react";
import Email from "./Email";
import Password from './Password';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import './../Style/FormStyles.css';

function SignIn() {
    return (
      <div className="SignIn">
          <form>
          <Email placeHolder="Enter your email..."/>
          <Password />
          <RememberMe />
          <Submit buttonValue="SIGN IN"/>
          </form>
      </div>
    );
  }
  
  export default SignIn;