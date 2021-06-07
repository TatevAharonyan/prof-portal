import React, { useState } from 'react';

function RePass(props) {
   const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState('');
   const [validPassword, setValidPassword] = useState('');
   const [validRePassword, setValidRePassword] = useState('');

   const checkValidPassword = e => {
      setPassword(e.target.value);
      if (password === "" || password.length < 8) {
         setValidPassword("password must min 8 characters long");
      }
      else {
         setValidPassword("");
      }
   }

   const checkValidRePassword = (e) => {
      setRePassword(e.target.value);
      if (typeof password !== undefined && password === rePassword) {
         setValidRePassword("");
         props.dispatch(e);
      } else {
         setValidRePassword("Passwords don't match!");
      }
   }

   return (
      <div>
         <input
            type="password"
            placeholder="Enter your password"
            className="text"
            onBlur={checkValidPassword}
         />
         { validPassword && <p className="valid" > {validPassword} </p>}

         <input
            type="password"
            placeholder="Confirm your password"
            className="text"
            onBlur={checkValidRePassword} />
         { validRePassword && <p className="valid">{validRePassword}</p>}
      </div>

   )
}

export default RePass