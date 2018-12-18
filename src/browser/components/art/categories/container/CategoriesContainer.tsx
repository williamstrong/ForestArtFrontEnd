/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { RouteComponentProps } from "react-router-dom";

import CategoryBox from "../presentational/CategoryBox";

const styles = {
    container: css({})
};

export interface CategoriesContainerProps extends RouteComponentProps {}

export default class CategoiesContainer extends Component<
    CategoriesContainerProps
> {
    public render() {
        const {
            match: { url }
        } = this.props;
        return (
            <Query
                query={gql`
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
                `}
                variables={{}}
            >
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
}
