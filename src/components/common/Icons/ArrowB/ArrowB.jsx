import React from 'react';
import PropTypes from 'prop-types';

const ArrowB = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14L25 14M25 14L12.234 1M25 14L12.234 27"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowB.propTypes = {
  className: PropTypes.string,
};
ArrowB.defaultProps = {};

export default React.memo(ArrowB);
