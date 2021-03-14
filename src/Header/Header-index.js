import React, { Component } from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Img";

const  Header = () => {
    return (
        <nav className="App-header">
            <Logo />
            <HeaderButton />
        </nav>
    )
}

export default Header