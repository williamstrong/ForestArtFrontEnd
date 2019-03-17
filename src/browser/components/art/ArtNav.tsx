import React from "react";

import NavBar from "../shared/NavBar";

import { name, navPosition, pages } from "./constants/Navigation";

const ArtNav = (): JSX.Element => (
    <NavBar css={navPosition} pages={pages} name={name} />
);

export default ArtNav;
