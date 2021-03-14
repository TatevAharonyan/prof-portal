import React from "react";
import "./../Style/Footer.css";
import AboutUs from "./About_Us";
// import ContactPrivacy from "./Contact_&_Privacy";
import ContactUs from "./Contact_Us";
import ForOurVisitors from "./For_Our_Visitors";

const FooterTop = () => {
    return (
        <div className="footer-top">
            <AboutUs />
            <ForOurVisitors />
            <ContactUs/>
        </div>
    )

}

export default FooterTop