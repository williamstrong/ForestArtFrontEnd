/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { Link } from "react-router-dom";

const altText = "Alexandra Forest's instagram page.";
const igLink = "http://www.instagram.com/aforestart";
const igLogo =
    "https://s3-us-west-1.amazonaws.com/aforest-web/media/images/assets/glyph-logo_May2016.png";

const styles = {
    footer: css({
        marginTop: "5vh",
        paddingTop: "2vh",
        paddingBottom: "2vh",
        width: "100vw",
        textAlign: "center",
        background: "grey"
    }),
    nameText: css({
        fontFamily: '"relation-two", "sans-serif"',
        fontWeight: 700,
        fontSize: "2em",
        marginTop: "1vh",
        marginBottom: "1vh"
    }),
    nav: css({
        marginTop: "1vh",
        marginBottom: "1vh"
    }),
    navText: css({
        textDecoration: "underline",
        color: "black",

        marginLeft: "1vw",
        marginRight: "1vw"
    }),
    instagram: css({
        margin: "15px",
        height: "30px",
        width: "30px"
    }),
    copyright: css({
        margin: 0
    })
};

const year = new Date().getFullYear();
const copyrightText = `Copyright © ${year} Alexandra Forest`;

const pages = [
    {
        key: 0,
        name: "About Me",
        href: "/aboutme",
        style: ""
    },
    {
        key: 1,
        name: "Art",
        href: "/art",
        style: ""
    },
    {
        key: 2,
        name: "Contact",
        href: "/contact",
        style: ""
    }
];

const Footer = () => (
    <footer css={styles.footer}>
        <p css={styles.nameText}>A Forest Art</p>
        <nav css={styles.nav}>
            {pages.map(page => (
                <Link key={page.key} to={page.href} css={styles.navText}>
                    {page.name}
                </Link>
            ))}
        </nav>
        <a href={igLink}>
            <img src={igLogo} alt={altText} css={styles.instagram} />
        </a>
        <p css={styles.copyright}>{copyrightText}</p>
    </footer>
);

export default Footer;
