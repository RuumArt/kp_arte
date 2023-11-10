import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ className }) => {
  return (
    <svg viewBox="0 0 12 7" className={className}>
      <path d="M0 .92.96 0 6 4.897 11.04 0l.96.92-6 5.83L0 .92Z" />
    </svg>
  );
};

Chevron.propTypes = {
  className: PropTypes.string,
};
Chevron.defaultProps = {};

export default React.memo(Chevron);
