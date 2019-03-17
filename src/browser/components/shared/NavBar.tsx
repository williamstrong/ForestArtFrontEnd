/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { Link } from "react-router-dom";

const textPositions = [
    css({
        borderRight: "1px solid black",
        paddingRight: "1em"
    }),
    css({
        paddingLeft: "1em",
        paddingRight: "1em"
    }),
    css({
        borderLeft: "1px solid black",
        paddingLeft: "1em"
    })
];

const styles = {
    navStyle: css({
        textAlign: "center",
        marginTop: "5vh",
        marginBottom: "5vh"
    }),
    name: css({
        fontFamily: '"relation-two", "sans-serif"',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "4em",
        paddingBottom: ".1em",
        margin: 0,

        "@media(max-width: 425px)": {
            fontSize: "2em"
        }
    }),
    navText: css({
        color: "black",
        textDecoration: "none",
        font: '2em "Europa-Light"',

        "@media(max-width: 425px)": {
            fontSize: "1em"
        }
    })
};

const createNavs = (pages: Page[]) => {
    const pagesWithStyle = pages.map((e: Page, i: number) => {
        e.style = [textPositions[i], styles.navText];
        return e;
    });
    return pagesWithStyle.map(page => (
        <Link key={page.name} to={page.href} css={page.style}>
            {page.name}
        </Link>
    ));
};

interface Page {
    name: string;
    href: string;
    style?: any;
}

export interface NavBarProps {
    name: string;
    pages: Page[];
}

const NavBar = (props: NavBarProps) => (
    <nav css={styles.navStyle}>
        <p css={styles.name}>{props.name}</p>
        {createNavs(props.pages)}
    </nav>
);

export default NavBar;
