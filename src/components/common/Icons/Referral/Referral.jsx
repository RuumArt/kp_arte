import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Referral = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="#FF8100" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0782 11.1843L13.3291 6.16667H11.3376L11.5885 11.1843L7.07091 9.42751L6.50022 11.2347L11.4017 12.2666L8.03499 16.1512L9.58863 17.3165L12.3333 13.0747L15.078 17.3165L16.6317 16.1512L13.265 12.2666L18.1665 11.2347L17.5958 9.42751L13.0782 11.1843ZM18.3333 7.88889L19.6667 12.1111L15.4444 13L18.3333 16.3333L14.7778 19L12.3333 15.2222L9.88889 19L6.33333 16.3333L9.22222 13L5 12.1111L6.33333 7.88889L10.3333 9.44444L10.1111 5H14.5556L14.3333 9.44444L18.3333 7.88889Z"
        fill="white"
      />
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#FF8100" />
    </svg>
  );
};

Referral.propTypes = {
  className: PropTypes.string,
};

export default memo(Referral);
