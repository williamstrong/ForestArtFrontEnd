/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import Footer from "../shared/footer/Footer";
import NavBar from "../shared/nav/NavBar";
import PreviewContainer from "../shared/preview/container/PreviewContainer";
import HeaderCanvasContainer from "./container/HeaderCanvasContainer";

const styles = {
    container: css({})
};

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
    <div css={styles.container}>
        <NavBar name="Alexandra Forest" pages={pages} />
        <PreviewContainer />
        <Footer />
    </div>
);

export default Home;
