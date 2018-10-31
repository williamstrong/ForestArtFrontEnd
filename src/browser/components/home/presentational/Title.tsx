import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const style = {
  container: css({
    textAlign: 'center',
  }),
  title: css({
    fontFamily: 'Europa-Light',
    fontSize: '3em',
  }),
};

export interface TitleProps {
  name: string;
};

const Title = (props: TitleProps) => (
  <div className={style.container}>
    <p className={style.title}>
      {name}
    </p>
  </div>
);

export default Title;
