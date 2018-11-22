import { css } from "emotion";
import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { RouteComponentProps } from "react-router-dom";

import environment from "../../../../util/RelayEnvironment";

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
            <QueryRenderer
                environment={environment}
                query={graphql`
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
                render={({ error, props }) => {
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    const {
                        categories: { edges }
                    } = props;
                    return (
                        <div className={styles.container}>
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
            />
        );
    }
}
