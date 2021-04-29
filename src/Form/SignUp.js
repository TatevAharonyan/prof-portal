import React from 'react';
import Email from "./Email";
import Name from './Name';
import RePass from './RePass';
import RememberMe from "./RememberMe";
import Submit from "./Submit";
import Birthday from './Birthday';
import Countries from './Countries';



function SignUp (){
    return (
        <div className="SignIn">
            <form>
            <Name placeHolder = "First name..." />
            <Name placeHolder = "Last name..." />
            <Email />
            <RePass />
            <Birthday />
            <Countries />
            <RememberMe />
            <Submit buttonValue="SIGN UP" />
            </form>
        </div>
      );
}

export default SignUp