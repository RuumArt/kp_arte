import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Container.module.scss';

const Container = ({ className, children }) => {
  return <div className={cx(s.root, className)}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Container.defaultProps = {};

export default React.memo(Container);
