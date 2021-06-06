import React, { useState } from 'react';

 function RePass () {
   const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState('');
   const [valid, setValid] = useState('');

   const passwordValidation = () => {
      if(typeof password !== 'undefined' && password === rePassword){
         setValid("Passwords match!");
      } else {
         setValid("Passwords don't match!");
      }

      return valid;
   }

    return (
       <div>
           <input type="password" placeholder="Enter your password" className="text" onChange={(e)=>{
            setPassword(e.target.value);}} />
            <input type="password" placeholder="Confirm your password" className="text" onChange = {(e)=>{
            setRePassword(e.target.value);}} onBlur = {passwordValidation}/>
            <p className="valid">{valid}</p>
       </div>
     
    )
 }

export default RePass