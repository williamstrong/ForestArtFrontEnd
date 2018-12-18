import React from "react";

import NavBar from "../../shared/nav/NavBar";

import { name, navPosition, pages } from "../constants/Navigation";

const AboutMeNav = () => <NavBar css={navPosition} pages={pages} name={name} />;

export default AboutMeNav;
