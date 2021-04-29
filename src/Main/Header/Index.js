import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Img";
import SignIn from "./../../Form/SignIn";
import SignUp from "./../../Form/SignUp";

const  Header = () => {
    //

    const [mode, setMode] = useState('');
    const handleButtonClick = (buttonType) => {
      setMode(buttonType);
    };
    //
    return (
        <nav className="App-header" >
            <Logo />
            <HeaderButton  onButtonClick={(handleButtonClick)}/>
            {mode === 'signIn' && <SignIn/>}
            {mode === 'signUp' && <SignUp />}
        </nav>
    )
}

export default Header