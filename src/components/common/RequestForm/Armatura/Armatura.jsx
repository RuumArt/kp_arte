import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
import Select from 'components/Select/Select';
import { useRequest } from 'providers/requestProvider/useRequest';
import { discountList } from '../constants';
import Line from './Line';
import s from './Armatura.module.scss';

const Armatura = ({ className, data, errors }) => {
  const { request, addArmatura, setField } = useRequest();

  const handleAddArm = () => {
    addArmatura();
  };

  const handleFieldChange = ({ name, value }) => {
    setField(name, value);
  };

  return (
    <div className={cx(s.root, className)}>
      <Text size="h2" className={s.title}>
        Арматура
      </Text>
      <div className={s.body}>
        {request.arm.length > 0 ? (
          request.arm.map((item, index) => (
            <Line
              key={item.id}
              index={index}
              values={item}
              data={data}
              errors={errors[index]}
              id={`arm_${index}`}
            />
          ))
        ) : (
          <Text>Список пока пуст...</Text>
        )}
      </div>
      {request.arm.length > 0 && (
        <div className={s.footer}>
          <Select
            label="Скидка, %"
            values={discountList}
            name="discountArm"
            value={request.discountArm}
            onChange={handleFieldChange}
            className={s.discount}
          />
        </div>
      )}
      <Button onClick={handleAddArm}>Добавить Арматуру</Button>
    </div>
  );
};

Armatura.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  errors: PropTypes.array,
};
Armatura.defaultProps = {};

export default React.memo(Armatura);
