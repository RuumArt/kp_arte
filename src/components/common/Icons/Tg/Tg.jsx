import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tg = forwardRef(({ className }, ref) => {
  return (
    <svg
      className={className}
      viewBox="0 0 146 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <path
        d="M24.7499 74.6385C21.0516 72.9139 22.3315 71.8107 22.698 67.6944L28.5118 26.8356L135.377 16.2085"
        fill="#C8DAEA"
      />
      <path
        d="M24.7718 74.6488C27.6255 75.9795 29.4944 75.2621 31.8099 74.4565L53.9305 66.7543L40.2842 46.4536"
        fill="#A9C9DD"
      />
      <path
        d="M40.269 46.4507L70.4223 101.888C74.3214 107.232 78.8087 107.499 83.0402 101.839L142.912 22.3318C148.412 15.5397 145.192 9.7925 139.106 9.73057L9.38361 0.856094C0.474544 0.367004 -1.43332 4.57516 3.78946 9.28155L27.8988 31.2464L112.44 20.4954C116.396 20.0633 118.758 22.3879 115.474 23.367"
        fill="url(#paint0_linear_137_388605)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_137_388605"
          x1="84.3888"
          y1="38.7668"
          x2="83.2766"
          y2="87.6615"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFF7FC" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
});

Tg.propTypes = {
  className: PropTypes.string,
};
Tg.defaultProps = {};

export default React.memo(Tg);
