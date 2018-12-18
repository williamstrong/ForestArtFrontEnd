/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

import { Link } from "react-router-dom";

import Name from "../name/Name";
// import Nav from "./Nav";

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
        textAlign: "center"
    }),
    divStyle: css({}),
    name: css({
        fontFamily: '"relation-two", "sans-serif"',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "3em",
        margin: "5% auto",
        textAlign: "center"
    }),
    navText: css({
        color: "black",
        textDecoration: "none",
        font: '1em "Europa-Light"'
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
    positionStyle?: string;
}

const NavBar = (props: NavBarProps) => (
    <div css={props.positionStyle}>
        <p css={styles.name}>{props.name}</p>
        <nav css={styles.navStyle}>{createNavs(props.pages)}</nav>
    </div>
);

NavBar.defaultProps = {
    positionStyle: styles.divStyle
};

export default NavBar;
