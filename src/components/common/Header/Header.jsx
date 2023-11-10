import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Container from 'components/Container';
import Text from 'components/Text';
import s from './Header.module.scss';

const Header = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      <Container className={s.inner}>
        <Text size="p2" className={s.logo}>
          Arte
        </Text>
        <Text size="p2" className={s.text}>
          Коммерческое предложение
        </Text>
      </Container>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {};

export default React.memo(Header);
