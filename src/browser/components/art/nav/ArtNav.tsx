import React from "react";

import NavBar from "../../shared/nav/NavBar";

import { name, navPosition, pages } from "../constants/Navigation";

const ArtNav = () => (
    <NavBar positionStyle={navPosition} pages={pages} name={name} />
);

export default ArtNav;
