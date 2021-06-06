import React from 'react';
import Email from "./Email";
import Name from './Name';
import RePass from './RePass';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import Birthday from './Birthday';
import Countries from './Countries';



function SignUp({ onClose }) {


    return (
        <div className="wrapp_form">
            <div className="SignIn  popup">
                <span className="close_popup" onClick= {onClose} >x</span>
                <form>
                    <Name placeHolder="First name..." />
                    <Name placeHolder="Last name..." />
                    <Email />
                    <RePass />
                    <Birthday />
                    <Countries />
                    <RememberMe />
                    <Submit buttonValue="SIGN UP" />
                </form>
            </div>
        </div>
    );
}

export default SignUp