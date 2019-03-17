/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";

import CategoryBox from "../presentational/CategoryBox";

const styles = {
    container: css({
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center"
    })
};

const query = gql`
    query CategoriesContainerQuery {
        categories {
            edges {
                node {
                    id
                    name
                    image {
                        name
                        sourceStandard
                        altText
                    }
                }
            }
        }
    }
`;
export interface CategoriesContainerProps extends RouteComponentProps {}

export default function CategoiesContainer(props: CategoriesContainerProps) {
    const {
        match: { url }
    } = props;

    return (
        <Query query={query} variables={{}}>
            {({ loading, error, data }) => {
                if (error) {
                    return <div>Error!</div>;
                }
                if (loading) {
                    return <div>Loading...</div>;
                }
                const {
                    categories: { edges }
                } = data;
                return (
                    <div css={styles.container}>
                        {edges.map((edge: any) => {
                            const { node: category } = edge;
                            const { image } = category;
                            return (
                                <CategoryBox
                                    key={category.id}
                                    url={url}
                                    category={category.name}
                                    name={image.name}
                                    image={image.sourceStandard}
                                    altText={image.altText}
                                />
                            );
                        })}
                    </div>
                );
            }}
        </Query>
    );
}
