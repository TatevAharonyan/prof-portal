import React from "react";
import Section1Button from "./Section1_Button";
import WelcomePortal from "./Text_Welcom";

const  WelcomePortalButton = () => {
    return (
        <div id="Welcome_portal_button">
            {/* Text Welcom ProfPortal */}
            <WelcomePortal/>

{/*  */}
            <div id="button">
                <Section1Button href = {"https://careercenter.am"} name = {"Job offers"}/>
                <Section1Button href = {"https://www.behance.net"} name = {"Job seekers"}/>
                <Section1Button href = {"https://training.epam.am"} name = {"Available trainings"}/>
            </div>
        </div>
    )
}

export default WelcomePortalButton 
