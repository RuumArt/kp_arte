import React from 'react';
import PropTypes from 'prop-types';

const Remove = ({ className }) => {
  return (
    <svg
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2.12134"
        width="30"
        height="3"
        transform="rotate(45 2.12134 0)"
      />
      <rect
        x="0.667236"
        y="21.3809"
        width="30"
        height="3"
        transform="rotate(-45 0.667236 21.3809)"
      />
    </svg>
  );
};

Remove.propTypes = {
  className: PropTypes.string,
};
Remove.defaultProps = {};

export default React.memo(Remove);
