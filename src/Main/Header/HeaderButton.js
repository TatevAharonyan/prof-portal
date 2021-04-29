import React from "react";

const HeaderButton = ({ onButtonClick }) => {
    return (
        <div className = "headerButton">
            <div><a href = "#" onClick={() => onButtonClick('signIn')}>Sign In </a></div>
            <div><a href = "#" onClick={() => onButtonClick('signUp')}>Sign Up</a></div>
        </div>
    )
}

export default HeaderButton