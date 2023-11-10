import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ className }) => {
  return (
    <svg
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.5718 11L0.714633 21.8872L0.714634 0.11284L19.5718 11Z"
        fill="black"
      />
    </svg>
  );
};

Play.propTypes = {
  className: PropTypes.string,
};
Play.defaultProps = {};

export default React.memo(Play);
