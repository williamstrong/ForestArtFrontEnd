import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Piece from "../presentational/Piece";

export interface PieceContainerProps {
    category: string;
    piece: string;
}

export default class PieceContainer extends Component<PieceContainerProps> {
    public render() {
        const { category, piece } = this.props;
        return (
            <Query
                query={gql`
                    query PieceContainerQuery(
                        $category: String!
                        $piece: String!
                    ) {
                        images(category_Name: $category, name: $piece) {
                            edges {
                                node {
                                    name
                                    sourceStandard
                                    description
                                }
                            }
                        }
                    }
                `}
                variables={{ category, piece }}
            >
                {({ loading, error, data }) => {
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (loading) {
                        return <div>Loading...</div>;
                    }
                    const {
                        images: { edges }
                    } = data;
                    const { node: image } = edges[0];
                    return (
                        <Piece
                            name={image.name}
                            sourceLarge={image.sourceStandard}
                            description={image.description}
                        />
                    );
                }}
            </Query>
        );
    }
}
