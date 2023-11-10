import React from 'react';
import PropTypes from 'prop-types';

const Check = ({ className }) => {
  return (
    <svg
      viewBox="0 0 14 10"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0.702843L4.7828 10L0 5.17571L0.696799 4.47287L4.7828 8.59431L9.043 4.29716L13.3032 0L14 0.702843Z"
        fill="white"
      />
    </svg>
  );
};

Check.propTypes = {
  className: PropTypes.string,
};

Check.defaultProps = {};

export default React.memo(Check);
