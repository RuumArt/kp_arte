import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './PageWrap.module.scss';

const PageWrap = ({ className, children }) => {
  return <div className={cx(s.root, className)}>{children}</div>;
};

PageWrap.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

PageWrap.defaultProps = {};

export default React.memo(PageWrap);
