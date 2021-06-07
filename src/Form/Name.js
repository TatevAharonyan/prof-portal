import React, { useState } from "react";


function Name(props) {
    const [warning, setWarning] = useState("")

// const valid = e => {
   
//     }
    

const onBlurChange = (e) => {
    if (e.target.value === "" || e.target.value === undefined ) {
        setWarning ("Fill in the field");
    } else {
        props.dispatch(e);
        setWarning ("") 
    };

}

    return (
        <>
            <input 
            type="text"
            placeholder={props.placeHolder} 
            className="name" 
            onBlur = { onBlurChange }
            />

            { warning !== "" && <span className  = "valid" > { warning } </span> }
        </>
    );
};

export default Name