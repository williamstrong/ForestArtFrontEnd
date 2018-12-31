/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import PreviewImage from "../presentational/PreviewImage";

const styles = {
    previewContainer: css({
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",

        textAlign: "center"
    }),
    link: css({
        color: "black",
        textDecoration: "none",

        margin: "5vh 5vw"
    })
};

interface PreviewContainerProps {
    category?: string;
}

export default class PreviewContainer extends React.Component<
    PreviewContainerProps
> {
    static defaultProps = {
        category: ""
    };

    render() {
        const { category } = this.props;
        return (
            <Query
                query={gql`
                    query PreviewContainerQuery($category: String!) {
                        images(first: 10, category_Name: $category) {
                            edges {
                                node {
                                    id
                                    name
                                    title
                                    category {
                                        name
                                    }
                                    sourceStandard
                                    description
                                    altText
                                }
                            }
                        }
                    }
                `}
                variables={{ category }}
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
                    return (
                        <div css={styles.previewContainer}>
                            {edges.map((imageData: any) => {
                                const {
                                    id,
                                    category: imageCategory,
                                    name,
                                    title,
                                    description,
                                    altText,
                                    sourceStandard
                                } = imageData.node;
                                const {
                                    name: imageCategoryName
                                } = imageCategory;
                                return (
                                    <Link
                                        css={styles.link}
                                        key={id}
                                        to={`/art/${imageCategoryName}/${name}`}
                                    >
                                        <PreviewImage
                                            name={title}
                                            sourceStandard={sourceStandard}
                                            description={description}
                                            altText={altText}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    );
                }}
            </Query>
        );
    }
}
