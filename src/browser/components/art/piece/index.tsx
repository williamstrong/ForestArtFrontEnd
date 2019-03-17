/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";

import ArtNav from "../ArtNav";
import CategoryNavigation from "../Category/container/CategoryNavigation";
import PieceContainer from "./container/PieceContainer";

const styles = {
    categoryNavPosition: css({
        marginRight: "auto"
    })
};

export interface PieceProps {
    match: {
        params: {
            category: string;
            piece: string;
        };
    };
}

export default class Piece extends Component<PieceProps> {
    constructor(props: PieceProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const {
            match: {
                params: { category, piece }
            }
        } = this.props;
        return (
            <div>
                <ArtNav />
                <CategoryNavigation css={styles.categoryNavPosition} />
                <PieceContainer category={category} piece={piece} />
            </div>
        );
    }
}
