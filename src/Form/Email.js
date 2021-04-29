import React, { useState } from "react";

const regEx = (text) => {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return text.match(mailformat);
}

function Email (props) {    
    const [emailWarning, setEmailWarning] = useState("");

    const onBlurChange = (e) => {
        if (regEx(e.target.value)) {
            setEmailWarning("Valid email!");
        } else {
            setEmailWarning("Email adress is not valid!");
        }
    };

    return (
        <div>
        <input type="email" placeholder="Enter your email..." className="text" onBlur={onBlurChange} />
        <p className="valid">{emailWarning}</p>
        </div>
    );
};

export default Email;
