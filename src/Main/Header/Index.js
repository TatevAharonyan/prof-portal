import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Img";
import SignIn from "./../../Form/SignIn";
import SignUp from "./../../Form/SignUp";

const  Header = () => {
    //

    const [mode, setMode] = useState('');
    const [isOpen, setIsOpen] = useState (false)

    const handleButtonClick = (buttonType) => {
        setIsOpen(true);
      setMode(buttonType);
    };

    const onClose = () => setIsOpen(false);
    //
    return (
        <nav className="app-header" >
            <Logo />
            <HeaderButton  onButtonClick={(handleButtonClick)} />
            {isOpen && mode === 'signIn' ? <SignIn onClose= {(onClose)}/> : null }
            {isOpen && mode === 'signUp' ? <SignUp onClose= {(onClose)}/> : null }
        </nav>
    )
}

export default Header