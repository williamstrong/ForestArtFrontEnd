import React from "react";

import styled from "@emotion/styled";

const HorizontalRule = styled.hr({
    border: "none",
    borderTop: "3px double #333",
    color: "#333",
    overflow: "visible",
    textAlign: "center",
    height: "5px",
    width: "80vw",
    margin: "auto",

    ":after": {
        background: "#fff",
        content: '"§"',
        padding: "0 4px",
        position: "relative",
        top: "-13px"
    }
});

export default HorizontalRule;
