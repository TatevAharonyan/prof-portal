import React from "react";
import Img from "./Img";
import WelcomePortalButton from "./Text_Welcom_&_Button";

const  Section1 = () => {
    return (
        <section id="section1">

            {/* Section1 text Welcome and nav button */}

            <WelcomePortalButton />

            {/* Section1 foto */}
            
            <Img/>

        </section>
    )
}


export default Section1