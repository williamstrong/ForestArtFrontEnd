import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ styles }) => (
  <div>
    {/* <HeaderImage /> */}
    <div className={styles} />
    {/* End */}
  </div>
);

Header.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default Header;
