import React from 'react';
import PropTypes from 'prop-types';

const LinkIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7716 0L24 12L11.7716 24L9.24136 21.517L17.1504 13.7557L0 13.7557L0 10.2443L17.1504 10.2443L9.24136 2.48298L11.7716 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

LinkIcon.propTypes = {
  className: PropTypes.string,
};
LinkIcon.defaultProps = {};

export default React.memo(LinkIcon);
