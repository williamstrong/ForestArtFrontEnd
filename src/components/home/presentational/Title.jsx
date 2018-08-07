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

const Title = ({ name }) => (
  <div className={style.container}>
    <p className={style.title}>
      {name}
    </p>
  </div>
);
Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
