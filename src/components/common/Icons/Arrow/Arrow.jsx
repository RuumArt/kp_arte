import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ className }) => {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="56"
        y="56"
        width="56"
        height="56"
        rx="28"
        transform="rotate(-180 56 56)"
        fill="#FF8100"
      />
      <path
        d="M37.3333 28L17.8888 28M17.8888 28L27.8179 38.1111M17.8888 28L27.8179 17.8889"
        stroke="black"
      />
    </svg>
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
};
Arrow.defaultProps = {};

export default React.memo(Arrow);
