import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/Text';
import Input from 'components/Input';
import Select from 'components/Select';
import uniqArr from 'utils/uniqArr';
import { useRequest } from 'providers/requestProvider/useRequest';
import Button from 'components/Button';
import Remove from 'components/Icons/Remove';
import {
  getSectionByModel,
  getSizesByModel,
  getTeploByModel,
} from 'components/RequestForm/Products/Line/utils';
import { countsList, flatsName } from '../../constants';

import s from './Line.module.scss';

const Line = ({
  className,
  index,
  data,
  values,
  colors,
  modelPhoto,
  errors,
  id,
}) => {
  const { setProduct, clearProductFields, removeProduct, clearError } =
    useRequest();

  const [typeChoose, setTypeChoose] = useState(null);
  const [countSections, setCountSections] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [teploList, setTeploList] = useState([]);

  useEffect(() => {
    if (values.model) {
      const valuesNew = {
        model: values.model,
        sizes: values.sizes,
        countSections: values.countSections,
        teplo: values.teplo,
      };

      setCountSections(getSectionByModel(data, valuesNew, typeChoose));
      setSizes(getSizesByModel(data, valuesNew, typeChoose));
      setTeploList(getTeploByModel(data, valuesNew, typeChoose));
    }
  }, [
    typeChoose,
    values.model,
    values.sizes,
    values.countSections,
    values.teplo,
    data,
  ]);

  const handleChangeProduct = useCallback(
    ({ name, value }) => {
      if (errors && errors[name]) {
        clearError(name, 'products', index);
      }

      setProduct(index, { name, value });
    },
    [index, setProduct, errors]
  );

  const handleChangeParamProduct = useCallback(
    ({ name, value }) => {
      if (errors && errors[name]) {
        clearError(name, 'products', index);
      }

      setProduct(index, { name, value });
      if (!typeChoose) setTypeChoose(name);
    },
    [index, setProduct, errors, typeChoose]
  );

  const handleRemoveProduct = useCallback(
    removeIndex => {
      removeProduct(removeIndex);
    },
    [removeProduct]
  );

  const models = useMemo(() => {
    return uniqArr(data, 'name').map(item => {
      return {
        id: `${item.id}_name`,
        value: item.name,
      };
    });
  }, [data]);

  const colorsList = useMemo(() => {
    return colors.map(item => {
      return {
        id: `${item.id}`,
        value: item.name,
        code: item.code,
        bigPrice: item.bigPrice,
      };
    });
  }, [colors]);

  const currentType = useMemo(() => {
    if (!values.model) return '-';
    const newArr = uniqArr(data, 'name').filter(
      item => item.name === values.model.value
    );

    return newArr[0].type || '-';
  }, [data, values.model]);

  const currentTypeUse = useMemo(() => {
    const currentTypes = modelPhoto.filter(item => {
      return item.type === currentType;
    });

    return currentTypes.length > 0
      ? currentTypes.map((item, i) => {
          return {
            id: `tsu_${i}`,
            value: item.typeUse,
          };
        })
      : [];
  }, [modelPhoto, currentType]);

  useEffect(() => {
    if (values.model) {
      setTypeChoose(null);
      clearProductFields(index, ['sizes', 'countSections', 'teplo', 'typeUse']);
    }
  }, [values.model]);

  useEffect(() => {
    if (values.model && values.sizes && values.countSections && values.teplo) {
      const arrSizes = values.sizes.value.split('x');

      const newArr = data.filter(item => {
        return (
          item.name === values.model.value &&
          item.width === arrSizes[1] &&
          item.length === arrSizes[0] &&
          item.countSections === values.countSections.value &&
          item.teplo === values.teplo.value
        );
      });

      if (newArr.length > 0 && newArr[0]?.price) {
        const { price } = newArr[0];

        const newPrice = values.color?.bigPrice
          ? price + price * (10 / 100)
          : price;

        setProduct(index, { price, priceNormal: newPrice }, true);
      }
    }
  }, [
    values.model,
    values.sizes,
    values.countSections,
    values.teplo,
    values.color,
    data,
  ]);

  return (
    <div className={cx(s.root, className)} id={id}>
      <div className={s.header}>
        <Text as="h2" size="h4" className={s.title}>
          Помещение №{index + 1}
        </Text>
        {index > 0 && (
          <Button
            className={s.remove}
            typeScheme="clear"
            colorScheme="none"
            onClick={handleRemoveProduct}
            cbData={index}
          >
            <Remove />
          </Button>
        )}
      </div>
      <div className={s.body}>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Input
              label="Номер помещения"
              initialValue={index + 1}
              name="number"
              readOnly
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Input
              label="Название помещения"
              initialValue={values.nameFlat}
              name="nameFlat"
              onChange={handleChangeProduct}
              isError={errors?.nameFlat}
            />
          </div>
          <div className={s.itemCol}>
            <Select
              label="Название помещения для картинки"
              values={flatsName}
              name="nameImage"
              value={values.nameImage}
              onChange={handleChangeProduct}
              isError={errors?.nameImage}
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Input
              label="Площадь помещения"
              type="number"
              name="square"
              initialValue={values.square}
              onChange={handleChangeProduct}
              isError={errors?.square}
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Select
              label="Название радиатора"
              values={models}
              onChange={handleChangeProduct}
              name="model"
              value={values.model}
              isError={errors?.model}
            />
          </div>
          <div className={s.itemCol}>
            <Select
              label="Количество секций"
              values={countSections}
              onChange={handleChangeParamProduct}
              name="countSections"
              value={values.countSections}
              isError={errors?.countSections}
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Select
              label="Размеры радиатора"
              values={sizes}
              onChange={handleChangeParamProduct}
              name="sizes"
              value={values.sizes}
              isError={errors?.sizes}
            />
          </div>
          <div className={s.itemCol}>
            <Select
              label="Теплоотдача"
              values={teploList}
              name="teplo"
              value={values.teplo}
              onChange={handleChangeParamProduct}
              isError={errors?.teplo}
            />
          </div>
          <div className={s.itemCol}>
            <Select
              label="Количество радиаторов"
              values={countsList}
              name="countRadiators"
              value={values.countRadiators}
              onChange={handleChangeProduct}
              isError={errors?.countRadiators}
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Input
              label="Тип радиатора"
              name="type"
              readOnly
              onChange={handleChangeProduct}
              initialValue={currentType}
              isError={errors?.type}
            />
          </div>
          <div className={s.itemCol}>
            <Select
              label="Тип подключения"
              values={currentTypeUse}
              name="typeUse"
              value={values.typeUse}
              onChange={handleChangeProduct}
              isError={errors?.typeUse}
            />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.itemCol}>
            <Select
              label="RAL/Цвет"
              values={colorsList}
              name="color"
              value={values.color}
              onChange={handleChangeProduct}
              isSearch
              isError={errors?.color}
            />
            {values.color?.bigPrice && (
              <Text className={s.plusPrice}>+10% к цене</Text>
            )}
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
  modelPhoto: PropTypes.array,
  errors: PropTypes.object,
  id: PropTypes.string,
};

Line.defaultProps = {};

export default React.memo(Line);
