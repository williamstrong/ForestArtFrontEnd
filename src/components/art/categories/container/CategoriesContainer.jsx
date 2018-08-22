import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { css } from 'emotion';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../../../util/RelayEnvironment';

import CategoryBox from '../presentational/CategoryBox';

const styles = {
  container: css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  }),
};

export default class CategoiesContainer extends Component {
  render() {
    const { match: { url } } = this.props;
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
          const { categories: { edges } } = props;
          return (
            <div className={styles.container}>
              { edges.map((edge) => {
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

CategoiesContainer.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
