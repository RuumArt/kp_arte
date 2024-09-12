import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { PDFDownloadLink } from '@react-pdf/renderer';

import Select from 'components/Select';
import { useRequest } from 'providers/requestProvider/useRequest';
import MyDocument from 'pages/Pdf/MyDocument';
import scrollTo from 'utils/scrollTo';
import Armatura from './Armatura';
import Products from './Products';
import s from './RequestForm.module.scss';

const RequestForm = ({ className, data }) => {
  const { request, setField, validate, errors, clearError } = useRequest();

  const handleFieldChange = ({ name, value }) => {
    setField(name, value);
    clearError(name, 'fields');
  };

  const handlePdfDownload = useCallback(
    e => {
      const { firstError, isValid } = validate();

      if (!isValid) {
        e.preventDefault();

        scrollTo(`#${firstError}`);
      }
    },
    [validate]
  );

  const currentDate = useMemo(() => {
    const nowDate = new Date();

    const [month, day, year, hours, minutes] = [
      nowDate.getMonth(),
      nowDate.getDate(),
      nowDate.getFullYear(),
      nowDate.getHours(),
      nowDate.getMinutes(),
    ];

    return `${day}.${month}.${year} ${hours}-${minutes}`;
  }, []);

  return (
    <form className={cx(s.root, className)}>
      <div className={s.manager} id="manager">
        <Select
          label="Отдел"
          name="unit"
          values={data.units}
          value={request.unit}
          onChange={handleFieldChange}
          isError={errors.fields.unit}
        />
      </div>
      <div className={s.manager} id="manager">
        <Select
          label="Менеджер"
          name="manager"
          values={data.managers}
          value={request.manager}
          onChange={handleFieldChange}
          isError={errors.fields.manager}
        />
      </div>
      <Products
        data={data.products}
        models={data.modelPhoto}
        colors={data.colors}
        className={s.products}
        errors={errors.products}
      />
      <Armatura
        data={data.armatura}
        className={s.armatura}
        errors={errors.arm}
      />
      <div className={s.buttons}>
        <PDFDownloadLink
          document={<MyDocument data={request} tables={data} />}
          fileName={`Коммерческое предложение (${currentDate}).pdf`}
          className={s.download}
          onClick={handlePdfDownload}
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Загрузка...' : 'Сформировать КП'
          }
        </PDFDownloadLink>
        {/* <CheckBox */}
        {/*  className={s.check} */}
        {/*  name="calcSum" */}
        {/*  value={request.calcSum} */}
        {/*  label="Рассчитать Итог" */}
        {/*  onChange={handleFieldChange} */}
        {/* /> */}
      </div>
    </form>
  );
};

RequestForm.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

RequestForm.defaultProps = {};

export default React.memo(RequestForm);
