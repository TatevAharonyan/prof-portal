import React from "react";
import Email from "./Email";
import Password from './Password';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import './../Style/FormStyles.css';

function SignIn({onClose}) {

  return (
    <div className="wrapp_form">
      <div className="SignIn popup">
        <span className = "close_popup" onClick = {onClose} >x</span>
        <form >
          <Email placeHolder="Enter your email..." />
          <Password />
          <RememberMe />
          <Submit buttonValue="SIGN IN" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;