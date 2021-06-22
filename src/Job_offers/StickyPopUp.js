import React, { useState }from 'react';
import SignIn from '../Form/SignIn';
import SignUp from '../Form/SignUp';

function StickyPopUp () {

   const closeBox = (e) => {
        e.target.parentElement.style.display = "none";
    }
  
    let [register, setRegister] = useState(false);
    let [login, setLogin] = useState(false);
    return (
        <div className = "sticky_popup">
            <span className="close_popup" onClick={closeBox} >x</span>
            <h3>You're signed out</h3>
            <p>Sign in for more experience</p>
            <button className = "apply" onClick = {() => setLogin(true)}>Sign In</button>
            {login && <SignIn onClose = {() => setLogin(false)} />}
            <button className = "submit" onClick = {() => {setRegister(true)}}>Register</button>
            {register && <SignUp onClose= {() => {setRegister(false)}}/>}
        </div>
    )
}

export default StickyPopUp