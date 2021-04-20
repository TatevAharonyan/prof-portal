import React from "react";
import FotoSection2 from "./Foto_Section2";
import TextSection2 from "./Text_Section2";


const Section2 = () => {
    return (
        <section className="section234">
            <FotoSection2 src="../img/job_offers.jpg" alt="Job offers foto" />
            <TextSection2 textH2="Job offers"
                text1="If you’re hiring a professional to join your team this is the exact place to do that. You can review all the skills and experience of your potential candidates and send them offers directly. Also you can post information regarding your vacant positions and the potential candidates will find you themselves. It’s fast and easy to communicate through our portal."
                text2="Go ahead and don’t waste your time searching your team members!" />
        </section>
    )
}


export default Section2