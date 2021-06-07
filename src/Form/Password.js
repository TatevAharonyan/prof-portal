import React, { useState } from 'react';

function Password( { dispatch } ) {
     const [passwordWarning, setPasswordWarning] = useState("");
     const [passValue, setPassValue] = useState ("");

     const onBlurChange = (e) => {
          if (passValue === "" || passValue.length < 8){
               setPasswordWarning ("password must min 8 characters long");
          }
          else {
               dispatch(e);
               setPasswordWarning("")
          }
     }

     return(
          <>
{console.log(passValue)}
           <input
          type = "password"
          value = { passValue }
          placeholder = "Enter your password"
          onChange = { e => setPassValue (e.target.value) }
          className="text"
          onBlur = { onBlurChange }
     />
     { passwordWarning && <p className = "valid" > { passwordWarning } </p>}
     </>
     )
}

export default Password