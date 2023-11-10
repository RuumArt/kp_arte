import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Line from 'components/RequestForm/Products/Line/Line';
import Text from 'components/Text/Text';
import Select from 'components/Select/Select';
import { discountList } from 'components/RequestForm/constants';
import Button from 'components/Button/Button';
import { useRequest } from 'providers/requestProvider/useRequest';
import s from './Products.module.scss';

const Products = ({ className, data, colors, models, errors }) => {
  const { request, addProduct, setField } = useRequest();

  const handleAddProduct = () => {
    addProduct();
  };

  const handleFieldChange = ({ name, value }) => {
    setField(name, value);
  };

  return (
    <div className={cx(s.root, className)}>
      <Text size="h2" className={s.title}>
        Радиаторы
      </Text>
      <div className={s.body}>
        {request.products.length > 0 ? (
          request.products.map((item, index) => (
            <Line
              key={item.id}
              index={index}
              values={item}
              data={data}
              colors={colors}
              modelPhoto={models}
              errors={errors[index]}
              id={`prod_${index}`}
            />
          ))
        ) : (
          <Text>Список пока пуст...</Text>
        )}
      </div>
      <Button onClick={handleAddProduct}>Добавить помещение</Button>
      <div className={s.footer}>
        <Select
          label="Скидка, %"
          values={discountList}
          name="discount"
          value={request.discount}
          onChange={handleFieldChange}
          className={s.discount}
        />
      </div>
    </div>
  );
};

Products.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  models: PropTypes.array,
  errors: PropTypes.array,
};
Products.defaultProps = {};

export default React.memo(Products);
