import React from 'react';
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
  link: css({
    color: 'black',
    textDecoration: 'none',

    margin: '5% 0',
  }),
};

interface PreviewContainerProps {
  category?: string;
}

interface PreviewContainerState {
  category: string;
}

export default class PreviewContainer extends React.Component<PreviewContainerProps, PreviewContainerState> {
  static defaultProps = {
    category: ''
  };

  constructor(props: PreviewContainerProps) {
    super(props);
    this.state = { category: this.props.category};
  };

  render() {
    const { category } = this.state;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PreviewContainerQuery($category: String!) {
            images(first: 10 category_Name: $category) {
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
            <div className={styles.previewContainer}>
              {edges.map((imageData: any) => {
                const {
                  id, category: imageCategory, name, description, altText, sourceStandard,
                } = imageData.node;
                const { name: imageCategoryName } = imageCategory;
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
      />
    );
  }
}
