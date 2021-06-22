import React, { useEffect, useState } from "react";
import Email from "./Email";
import Password from './Password';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import './../Style/FormStyles.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { enterEmail, enterPass } from "./../action/signInAction"
import SignUp from "./SignUp";


function SignIn({ onClose, signIn, enterEmail, enterPass, LoggedIn }) {
 
  const [validEmail, setValidEmail] = useState (true);
  const [validPass, setValidPass] = useState (true);
  const URL = 'https://jsonplaceholder.typicode.com/users';

 
  const formSignIn = (e) => {
    e.preventDefault();

    if (signIn.email === "") {
      setValidEmail( false );
      return false;
    } else {
      setValidEmail ( true );
    }
     if ( signIn.pass === "") {
      setValidPass ( false );
      return false;
    } else {
      setValidPass ( true );
    }

    console.log(signIn, "signIn")
    
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signIn),
    })
      .then(response => {
        if (response.status >= 200 || response.status < 210) {
          console.log(response, "response")
          return response.json()
        }
        else console.log("we have an error")
      })
      .then(data => {
        console.log(data, "daata");
     
        LoggedIn();
        onClose();



      })
      .catch(erro => console.log("error"))
  
}


  return (

    <div className="wrapp_form">
      { console.log(signIn)}
      <div className="SignIn popup">
        <span className="close_popup" onClick={onClose} >x</span>
        <form 
        method="POST"
         onSubmit={formSignIn}
         >
        <h3>Sign In</h3>
          <Email
          validEmail = { validEmail}
            placeHolder="Enter your email..."
            dispatch={ e => enterEmail(e) }
          />
          <Password
            dispatch={ e => enterPass(e) }
            validPass = { validPass }
          />
          <RememberMe />
          <Submit 
            buttonValue="SIGN IN"
          />
            <p  style = {{margin: 0}} >If you have not yet registered,  <a href = "#" >Sign Up</a> </p>
        </form>
      
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state, "stateee")
  return {
    signIn: state.signIn,
  }
}

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    enterEmail,
    enterPass,
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);