import React from "react";

import Footer from "../shared/Footer";
import ProfileContainer from "./containers/ProfileContainer";
import AboutMeNav from "./nav/AboutMeNav";

const AboutMe = () : JSX.Element => (
    <div>
        <AboutMeNav />
        <ProfileContainer />
        <Footer />
    </div>
);

export default AboutMe;
