import React from 'react';
import PropTypes from 'prop-types';

const Telegram = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3386 19.2547L19.7866 24.0186C20.5225 24.4246 21.0534 24.2143 21.2368 23.3355L23.8614 10.9671C24.1301 9.88976 23.4508 9.40096 22.7468 9.72056L7.33477 15.6634C6.28277 16.0854 6.28904 16.6723 7.14304 16.9338L11.0981 18.1683L20.2545 12.3916C20.6868 12.1295 21.0836 12.2703 20.758 12.5594"
        fill="currentColor"
      />
    </svg>
  );
};

Telegram.propTypes = {
  className: PropTypes.string,
};
Telegram.defaultProps = {};

export default React.memo(Telegram);
