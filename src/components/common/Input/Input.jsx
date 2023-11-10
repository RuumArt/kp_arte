import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text';
import useValueUpdate from 'hooks/useValueUpdate';
import s from './Input.module.scss';

const Input = ({
  className,
  type,
  name,
  initialValue,
  onChange,
  label,
  readOnly,
  isError,
}) => {
  const handleChange = useCallback(
    e => {
      const { value } = e.target;

      if (onChange) onChange({ name, value });
    },
    [name, onChange]
  );

  useValueUpdate(() => {
    if (readOnly) {
      if (onChange) onChange({ name, value: initialValue });
    }
  }, initialValue);

  return (
    <div
      className={cx(s.root, className, {
        [s.isError]: isError,
      })}
    >
      {label && <Text className={s.label}>{label}</Text>}
      <input
        type={type}
        name={name}
        value={initialValue}
        readOnly={readOnly}
        onInput={handleChange}
        className={s.input}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default React.memo(Input);
