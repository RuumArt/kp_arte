import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ className }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 1L17 17M17 1L1 17" stroke="black" />
    </svg>
  );
};

Close.propTypes = {
  className: PropTypes.string,
};

Close.defaultProps = {};

export default React.memo(Close);
