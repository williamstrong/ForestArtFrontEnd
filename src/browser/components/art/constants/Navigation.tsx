import { css } from "emotion";

export const pages = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About Me",
        href: "/aboutme"
    },
    {
        name: "Contact",
        href: "/contact"
    }
];

export const name = "Art";

export const href = "/art";

export const categories = [
    {
        key: 0,
        category: "abstract",
        name: "Abstract",
        url: "/art/abstract"
    },
    {
        key: 1,
        category: "flowers",
        name: "Flowers",
        url: "/art/flowers"
    },
    {
        key: 2,
        category: "around-the-world",
        name: "Around the World",
        url: "/art/around-the-world"
    },
    {
        key: 3,
        category: "other",
        name: "Other",
        url: "/art/other"
    }
];

export const navPosition = css({
    display: "inline-block",
    paddingBottom: "5em",
    width: "100%"
});
