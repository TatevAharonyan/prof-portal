import React from 'react';
import Email from "./Email";
import Name from './Name';
import RePass from './RePass';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import Birthday from './Birthday';
import Countries from './Countries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterUserEmail, enterUserPass, enterUserBirthday, enterUserFirstName, enterUserLastName, enterUserCountries } from "./../action/signUpAction"


function SignUp( props ) {


    return (
        <div className="wrapp_form">
            <div className="SignIn  popup">
                <span className="close_popup" onClick= {props.onClose} >x</span>
                <form>
                    <Name placeHolder="First name..."  dispatch = { e => props.enterUserFirstName(e)} />
                    <Name placeHolder="Last name..."  dispatch = { e => props.enterUserLastName(e)} />
                    <Email  dispatch = { e => props.enterUserEmail (e) } />
                    <RePass dispatch = { e => props.enterUserPass (e) } />
                    <Birthday  dispatch = { e => props.enterUserBirthday (e) } />
                    <Countries dispatch = { countries => props.enterUserCountries (countries) }/>
                    <RememberMe />
                    <Submit buttonValue="SIGN UP" />
                </form>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state, "stateee")
    return {
      signUp: state.SignUp,
    }
  }
  
  const mapDispatchToProps = dispatch => {
  
    return bindActionCreators({
        enterUserEmail,
        enterUserPass,
        enterUserBirthday,
        enterUserFirstName,
        enterUserLastName,
        enterUserCountries,
    },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default SignUp