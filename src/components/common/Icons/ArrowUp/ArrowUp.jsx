import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66923 0.958008H23.0828L23.0828 22.3716H20.0828L20.0828 6.07933L3.14476 23.0174L1.02344 20.8961L17.9615 3.95801L1.66923 3.95801L1.66923 0.958008Z"
        fill="black"
      />
    </svg>
  );
};

ArrowUp.propTypes = {
  className: PropTypes.string,
};
ArrowUp.defaultProps = {};

export default React.memo(ArrowUp);
