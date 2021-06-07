import React from "react";
import Email from "./Email";
import Password from './Password';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import './../Style/FormStyles.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { enterEmail, enterPass } from "./../action/signInAction"


function SignIn({ onClose, signIn, enterEmail, enterPass }) {

  const formSignIn = (e) => {
    e.preventDefault();

    console.log(signIn, "signIn")
    
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signIn),
    // })
    //   .then(response => {
    //     if (response.status === 200) {
    //       console.log(response, "response")
    //       return response.json()
    //     }
    //     else console.log("we have an error")
    //   })
    //   .then(data => {
    //     console.log(data, "data")
    //     // dispatch({
    //     //     type: SERVER_DATA,
    //     //     payload: data
    //     // })
    //   })
    //   .catch(erro => console.log(error))
  // }
}


  return (

    <div className="wrapp_form">
      { console.log(signIn)}
      <div className="SignIn popup">
        <span className="close_popup" onClick={onClose} >x</span>
        <form method="POST" onSubmit={formSignIn}>
          <Email
            placeHolder="Enter your email..."
            dispatch={ e => enterEmail(e) }
          />
          <Password
            dispatch={ e => enterPass(e) }
          />
          <RememberMe />
          <Submit
            buttonValue="SIGN IN"
          />
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