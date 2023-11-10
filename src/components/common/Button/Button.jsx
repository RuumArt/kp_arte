/* eslint-disable */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';
import s from './Button.module.scss';

const Button = ({
  className,
  typeScheme,
  colorScheme,
  children,
  type,
  onClick,
  cbData,
}) => {
  const mods = modsClasses(s, { typeScheme, colorScheme });

  const handleClick = useCallback(() => {
    if (onClick) onClick(cbData);
  }, [cbData, onClick]);

  return (
    <button
      type={type}
      className={cx(s.root, className, mods)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func,
  typeScheme: PropTypes.oneOf(['normal', 'big', 'clear']),
  colorScheme: PropTypes.oneOf(['white', 'orange', 'none']),
  cbData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
};

Button.defaultProps = {
  typeScheme: 'normal',
  colorScheme: 'white',
  type: 'button',
  cbData: null,
};

export default React.memo(Button);
