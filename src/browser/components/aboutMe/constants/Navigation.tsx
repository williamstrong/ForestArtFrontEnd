/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const pages = [
    {
        name: "Home",
        href: "/"
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

export const name = "About Me";

export const href = "/aboutme";

export const navPosition = css({
    paddingBottom: "5em",
    display: "inline-block",
    width: "100%"
});
