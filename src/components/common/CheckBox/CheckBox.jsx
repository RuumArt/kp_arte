import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text';
import Check from 'components/Icons/Check';
import s from './CheckBox.module.scss';

const CheckBox = ({ className, onChange, name, value, label }) => {
  const handleChange = useCallback(
    e => {
      const { checked } = e.target;
      if (onChange) onChange({ name, value: checked });
    },
    [name, onChange]
  );

  return (
    <div className={cx(s.root, className)}>
      <input
        type="checkbox"
        className={s.input}
        onChange={handleChange}
        checked={value}
        value
      />
      <div className={s.icon}>
        <Check />
      </div>
      <Text className={s.label}>{label}</Text>
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
};

CheckBox.defaultProps = {};

export default React.memo(CheckBox);
