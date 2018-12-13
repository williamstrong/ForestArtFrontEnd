import React from "react";
import { css } from "emotion";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import PreviewImage from "../presentational/PreviewImage";

const styles = {
    previewContainer: css({
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",

        margin: "10%",

        textAlign: "center"
    }),
    link: css({
        color: "black",
        textDecoration: "none",

        margin: "5% 0"
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
                        <div className={styles.previewContainer}>
                            {edges.map((imageData: any) => {
                                const {
                                    id,
                                    category: imageCategory,
                                    name,
                                    description,
                                    altText,
                                    sourceStandard
                                } = imageData.node;
                                const {
                                    name: imageCategoryName
                                } = imageCategory;
                                return (
                                    <Link
                                        className={styles.link}
                                        key={id}
                                        to={`/art/${imageCategoryName}/${name}`}
                                    >
                                        <PreviewImage
                                            name={name}
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
