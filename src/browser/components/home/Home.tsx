/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import Footer from "../shared/footer/Footer";
import NavBar from "../shared/nav/NavBar";
import PreviewContainer from "../shared/preview/container/PreviewContainer";
import HeaderCanvasContainer from "./container/HeaderCanvasContainer";
import HorizontalRule from "../shared/HorizontalRule";

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
