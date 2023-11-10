import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
import Remove from 'components/Icons/Remove/Remove';
import { useRequest } from 'providers/requestProvider/useRequest';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import uniqArr from 'utils/uniqArr';
import s from './Line.module.scss';

const Line = ({ className, index, data, values, errors, id }) => {
  const { removeArm, setArm, clearError } = useRequest();

  const handleRemoveArm = removeIndex => {
    removeArm(removeIndex);
  };

  const handleChangeArm = useCallback(
    ({ name, value }) => {
      if (errors && errors[name]) {
        clearError(name, 'arm', index);
      }

      setArm(index, { name, value });
    },
    [index, setArm, errors]
  );

  const models = useMemo(() => {
    return uniqArr(data, 'name').map(item => {
      return {
        id: `${item.id}_name`,
        value: item.name,
      };
    });
  }, [data]);

  const currentPrice = useMemo(() => {
    if (!values.name) return '-';

    const newArr = uniqArr(data, 'name').filter(
      item => item.name === values.name.value
    );

    return newArr[0].price || '-';
  }, [data, values.name]);

  return (
    <div className={cx(s.root, className)} id={id}>
      <div className={s.header}>
        <Text as="h2" size="h4" className={s.title}>
          №{index + 1}
        </Text>
        <Button
          className={s.remove}
          typeScheme="clear"
          colorScheme="none"
          onClick={handleRemoveArm}
          cbData={index}
        >
          <Remove />
        </Button>
      </div>
      <div className={s.body}>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Select
              label="Арматура"
              values={models}
              name="name"
              value={values.name}
              onChange={handleChangeArm}
              isError={errors?.name}
              isSearch
            />
          </div>
          <div className={s.itemCol}>
            <Input
              label="Количество"
              initialValue={values.count}
              type="number"
              name="count"
              onChange={handleChangeArm}
              isError={errors?.count}
            />
          </div>
          <div className={s.itemCol}>
            <Input
              label="Цена"
              initialValue={currentPrice}
              type="number"
              name="price"
              readOnly
              onChange={handleChangeArm}
              isError={errors?.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Line.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  values: PropTypes.object,
  data: PropTypes.array.isRequired,
  errors: PropTypes.object,
  id: PropTypes.string,
};

Line.defaultProps = {};

export default React.memo(Line);
