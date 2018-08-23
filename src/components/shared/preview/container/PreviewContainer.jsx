// @flow

import React, { Component } from 'react';
import { css } from 'emotion';
import { graphql, QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';

import environment from '../../../../util/RelayEnvironment';

import PreviewImage from '../presentational/PreviewImage';

const styles = {
  previewContainer: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',

    margin: '10%',

    textAlign: 'center',
  }),
};

type Props = {
  category?: string,
}

export default class PreviewContainer extends Component<Props> {
  static defaultProps = {
    category: null,
  }

  render() {
    const { category } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PreviewContainerQuery($category: String!) {
            images(category_Name: $category) {
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
          }`
        }
        variables={{ category }}
        render={({ error, props }) => {
          if (error) {
            return (
              <div>
                Error!
              </div>
            );
          }
          if (!props) {
            return (
              <div>
                Loading...
              </div>
            );
          }
          const { images: { edges } } = props;
          return (
            <div>
              <div className={styles.previewContainer}>
                {edges.map((imageData) => {
                  const {
                    id, category: imageCategory, name, description, sourceStandard,
                  } = imageData.node;
                  const { name: imageCategoryName } = imageCategory;
                  return (
                    <Link
                      key={id}
                      to={`/art/${imageCategoryName}/${name}`}
                    >
                      <PreviewImage
                        name={name}
                        sourceStandard={sourceStandard}
                        description={description}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }}
      />
    );
  }
}
