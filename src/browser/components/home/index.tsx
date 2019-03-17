/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Footer from "../shared/Footer";
import HorizontalRule from "../shared/HorizontalRule";
import NavBar from "../shared/NavBar";
import PreviewContainer from "../shared/preview/container/PreviewContainer";

const pages = [
    {
        name: "About Me",
        href: "/aboutme"
    },
    {
        name: "Art",
        href: "/art"
    },
    {
        name: "Contact",
        href: "/contact"
    }
];

const Home = () => (
    <React.Fragment>
        <HorizontalRule />
        <NavBar name="Alexandra Forest" pages={pages} />
        <HorizontalRule />
        <PreviewContainer />
        <HorizontalRule />
        <Footer />
    </React.Fragment>
);

export default Home;
