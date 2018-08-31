// @flow

import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../../../util/RelayEnvironment';

import Piece from '../presentational/Piece';

type Props = {
  category: string,
  piece: string,
}

export default class PieceContainer extends Component<Props> {
  render() {
    const { category, piece } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
            query PieceContainerQuery($category: String! $piece: String!) {
              images(category_Name: $category name: $piece) {
                edges {
                  node {
                    name
                    sourceStandard
                    description
                  }
                }
              }
            }`
          }
        variables={{ category, piece }}
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
          const { node: image } = edges[0];
          return (
            <Piece
              name={image.name}
              sourceLarge={image.sourceStandard}
              description={image.description}
            />
          );
        }}
      />
    );
  }
}