import React from 'react';
import { css } from 'emotion';

const styles = {
  name: css({

  }),
  description: css({

  }),
};

export interface ImageTextProps {
  name: string,
  description: string,
  className?: string,
};

const ImageText = (props: ImageTextProps) => (
  <div className={props.className}>
    <p className={styles.name}>
      {props.name}
    </p>
    <p className={styles.description}>
      {props.description}
    </p>
  </div>
);

export default ImageText;
