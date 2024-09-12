import React, { useCallback } from 'react';

import {
  Page,
  Document,
  StyleSheet,
  Image,
  Font,
  View,
  Text,
} from '@react-pdf/renderer';

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from '@david.kucsai/react-pdf-table';

import PropTypes from 'prop-types';

Font.register({
  family: 'Golos',
  src: 'fonts/Golos-Text/regular.ttf',
});

Font.register({
  family: 'Golos Bold',
  src: 'fonts/Golos-Text/golos-text_bold.ttf',
});

Font.register({
  family: 'Golos Demi',
  src: 'fonts/Golos-Text/golos-text_demibold.ttf',
});

const s = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Golos',
    width: '100%',
    backgroundColor: '#333331',
    color: '#fff',
    border: 0,
  },
  mainImage: {
    width: '100%',
    height: '365px',
    objectFit: 'cover',
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '14px 0',
    fontSize: '16px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    paddingLeft: '15px',
    paddingRight: '30px',
  },
  schemeRight: {
    minHeight: '100px',
    maxHeight: '160px',
  },
  left: {
    width: '55%',
    paddingLeft: '30px',
    paddingRight: '15px',
  },
  dText: {
    marginBottom: '3px',
  },
  sText: {
    fontSize: '12px',
  },
  model: {
    fontSize: '20px',
    margin: '12px 0',
  },
  footer: {
    fontSize: '10px',
    padding: '26px 30px',
    marginTop: 'auto',
  },
  schemes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10px',
    padding: '0 30px',
    justifyContent: 'space-between',
  },
  scheme: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '150px',
    height: '120px',
  },
  schemeImage: {
    objectFit: 'contain',
  },
  pageSum: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Golos',
    backgroundColor: '#fff',
  },
  sumHeader: {
    padding: '32px 30px',
    backgroundColor: '#333331',
  },
  sumTitle: {
    fontSize: '25px',
    color: '#fff',
  },
  table: {
    padding: '30px 30px',
  },
  tableTitle: {
    marginBottom: '30px',
    fontSize: '25px',
    color: '#333331',
  },
  headerTable: {
    padding: '10px',
    backgroundColor: '#333331',
    color: '#fff',
    fontSize: '8px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cellTable: {
    padding: '10px',
    color: '#333331',
    fontSize: '8px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  sumCellTable: {
    padding: '10px',
    color: '#333331',
    fontSize: '8px',
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  manager: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    padding: '20px 30px',
  },
  managerContact: {
    width: '210px',
  },
  managerText: {
    fontSize: '15px',
  },
  managerPhoto: {
    width: '110px',
    height: '110px',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  managerPhotoImg: {
    position: 'relative',
    objectFit: 'cover',
  },
  hide: {
    display: 'none',
    opacity: 0,
  },
  pageFriday: {
    position: 'relative',
    fontFamily: 'Golos',
    width: '100%',
    backgroundColor: '#333331',
    color: '#fff',
    border: 0,
  },
  fHeader: {
    paddingTop: '180px',
    paddingLeft: '66px',
  },
  fLogo: {
    width: '134px',
    marginLeft: '-14px',
    marginBottom: '38px',
  },
  fTitle: {
    width: '440px',
    // height: '102px',
    marginBottom: '22px',
  },
  fText: {
    fontSize: '21px',
  },
  fPercent: {
    fontSize: '28px',
    fontFamily: 'Golos Bold',
  },
  yellowText: {
    color: '#E3E901',
  },
  greenText: {
    color: '#07FB10',
  },
  actionTitle: {
    width: '186px',
  },
  fActionDate: {
    fontSize: '70px',
    fontFamily: 'Golos Demi',
    marginTop: '-4px',
  },
  fBody: {
    marginTop: '120px',
    paddingLeft: '66px',
  },
  fSnow: {
    position: 'absolute',
    right: 0,
    top: '310px',
    width: '250px',
  },
  fBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
  },
});

const MyDocument = ({ data, tables }) => {
  const getMainPhoto = useCallback(
    (name, model) => {
      if (!name || !model) return 1;

      const image = tables.mainPhotos.filter(item => {
        return (
          item.name.toLowerCase() === model.toLowerCase() &&
          item.type.toLowerCase() === name.toLowerCase()
        );
      });

      return image[0]?.number;
    },
    [tables]
  );

  const getPhoto = useCallback(
    (photoKey, value) => {
      if (!value) return 1;

      const image = tables[photoKey].filter(item => {
        return item.name.toLowerCase() === value.toLowerCase();
      });

      return image[0]?.number;
    },
    [tables]
  );

  const getModelScheme = useCallback(
    (photoKey, type, typeUse) => {
      if (!type || !typeUse) return 1;

      const image = tables[photoKey].filter(item => {
        return (
          item.type.toLowerCase() === type.toLowerCase() &&
          item.typeUse.toLowerCase() === typeUse.toLowerCase()
        );
      });

      return image[0]?.number;
    },
    [tables]
  );

  const getSum = (count, price, discount = 0) => {
    const total =
      discount > 0 ? count * (price - price * (discount / 100)) : count * price;
    return total;
  };

  const getTotals = (items, discount, priceKey = 'price') => {
    const sum = items.reduce((acc, a) => {
      return (
        acc + getSum(a?.countRadiators?.value || a.count, a[priceKey], discount)
      );
    }, 0);

    return sum;
  };

  const isArmDiscount =
    data.discountArm !== null && data.discountArm.value !== 0;

  const isProductDiscount = data.discount !== null && data.discount.value !== 0;

  return (
    <Document>
      {/* {data.calcSum && ( */}
      {/* <Page style={s.pageFriday}> */}
      {/*  <Image style={s.fBg} src="img/bf-bg.png" /> */}
      {/*  <Image style={s.fSnow} src="img/bf-snow.png" /> */}
      {/*  <View style={s.fHeader}> */}
      {/*    <Image style={s.fLogo} src="img/logo.png" /> */}
      {/*    <Image style={s.fTitle} src="img/bf-title.png" /> */}
      {/*    <Text style={s.fText}> */}
      {/*      <Text style={s.greenText}>Скидка </Text> */}
      {/*      <Text style={s.fPercent}>{tables?.info?.discount || ''}% </Text>на */}
      {/*      любой дизайн-радиатор */}
      {/*    </Text> */}
      {/*    <Text style={s.fText}> */}
      {/*      <Text style={s.yellowText}>с доставкой</Text> по всей России */}
      {/*    </Text> */}
      {/*  </View> */}
      {/*  <View style={s.fBody}> */}
      {/*    <Image style={s.actionTitle} src="img/action.png" /> */}
      {/*    <Text style={s.fActionDate}>{tables?.info?.dateDiscount || ''}</Text> */}
      {/*  </View> */}
      {/* </Page> */}
      <Page style={s.pageSum}>
        <View style={s.sumHeader}>
          <Text style={s.sumTitle}>Предложение Arte</Text>
        </View>
        {data?.products.length > 0 && (
          <View style={s.table}>
            <Text style={s.tableTitle}>Радиаторы</Text>
            <Table data={data.products}>
              <TableHeader>
                <TableCell
                  style={s.headerTable}
                  weighting={isProductDiscount ? 0.2 : 0.4}
                >
                  Радиатор
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.1}>
                  Секций
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.1}>
                  Цвет
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.2}>
                  Подключение
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.1}>
                  Кол-во
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.1}>
                  Цена
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.1}>
                  Сумма
                </TableCell>
                <TableCell
                  style={!isProductDiscount ? s.hide : s.headerTable}
                  weighting={0.1}
                >
                  Скидка
                </TableCell>
                <TableCell
                  style={!isProductDiscount ? s.hide : s.headerTable}
                  weighting={0.1}
                >
                  Итого
                </TableCell>
              </TableHeader>
              <TableBody>
                <DataTableCell
                  getContent={r => r.model?.value}
                  weighting={isProductDiscount ? 0.2 : 0.4}
                  style={s.cellTable}
                />
                <DataTableCell
                  weighting={0.1}
                  style={s.cellTable}
                  getContent={r => r.countSections?.value}
                />
                <DataTableCell
                  weighting={0.1}
                  style={s.cellTable}
                  getContent={r => r.color?.code}
                />
                <DataTableCell
                  weighting={0.2}
                  style={s.cellTable}
                  getContent={r => r.typeUse?.value}
                />
                <DataTableCell
                  weighting={0.1}
                  style={s.cellTable}
                  getContent={r => `${r.countRadiators?.value} шт.`}
                />
                <DataTableCell
                  weighting={0.1}
                  style={s.cellTable}
                  getContent={r => r.priceNormal}
                />
                <DataTableCell
                  weighting={0.1}
                  style={s.cellTable}
                  getContent={r =>
                    `${getSum(r.countRadiators?.value, r.priceNormal).toFixed(
                      1
                    )}`
                  }
                />
                <DataTableCell
                  weighting={0.1}
                  style={!isProductDiscount ? s.hide : s.cellTable}
                  getContent={() => `${data.discount?.value || 0}%`}
                />
                <DataTableCell
                  weighting={0.1}
                  style={!isProductDiscount ? s.hide : s.cellTable}
                  getContent={r =>
                    `${getSum(
                      r.countRadiators?.value,
                      r.priceNormal,
                      data.discount?.value || 0
                    ).toFixed(1)}`
                  }
                />
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableCell style={s.cellTable} weighting={0.2}>
                  Итого
                </TableCell>
                <DataTableCell
                  style={s.sumCellTable}
                  weighting={0.8}
                  getContent={() =>
                    `${getTotals(data.products, 0, 'priceNormal').toFixed(
                      1
                    )} руб.`
                  }
                />
              </TableHeader>
            </Table>
            {isProductDiscount && (
              <Table>
                <TableHeader>
                  <TableCell style={s.cellTable} weighting={0.2}>
                    Итого со скидкой
                  </TableCell>
                  <DataTableCell
                    style={s.sumCellTable}
                    weighting={0.8}
                    getContent={() =>
                      `${getTotals(
                        data.products,
                        data.discount?.value,
                        'priceNormal'
                      ).toFixed(1)} руб.`
                    }
                  />
                </TableHeader>
              </Table>
            )}
          </View>
        )}
        {data.arm && data.arm.length > 0 && (
          <View style={s.table}>
            <Text style={s.tableTitle}>Арматура</Text>
            <Table data={data.arm}>
              <TableHeader>
                <TableCell
                  style={s.headerTable}
                  weighting={isArmDiscount ? 0.5 : 0.6}
                >
                  Название
                </TableCell>
                <TableCell style={s.headerTable} weighting={0.2}>
                  Кол-во
                </TableCell>
                {isArmDiscount && (
                  <TableCell style={s.headerTable} weighting={0.1}>
                    Скидка
                  </TableCell>
                )}
                <TableCell style={s.headerTable} weighting={0.2}>
                  Сумма
                </TableCell>
              </TableHeader>
              <TableBody>
                <DataTableCell
                  getContent={r => r.name?.value}
                  weighting={isArmDiscount ? 0.5 : 0.6}
                  style={s.cellTable}
                />
                <DataTableCell
                  getContent={r => `${r.count} шт.`}
                  weighting={0.2}
                  style={s.cellTable}
                />
                {isArmDiscount && (
                  <DataTableCell
                    getContent={() => `${data.discountArm?.value || 0}%`}
                    weighting={0.1}
                    style={s.cellTable}
                  />
                )}
                <DataTableCell
                  getContent={r =>
                    getSum(
                      r.count,
                      r.price,
                      data.discountArm?.value || 0
                    ).toFixed(1)
                  }
                  weighting={0.2}
                  style={s.cellTable}
                />
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableCell style={s.cellTable} weighting={0.2}>
                  Итого
                </TableCell>
                <DataTableCell
                  style={s.sumCellTable}
                  weighting={0.8}
                  getContent={() =>
                    `${getTotals(
                      data.arm,
                      data.discountArm?.value,
                      'price'
                    ).toFixed(1)} руб.`
                  }
                />
              </TableHeader>
            </Table>
          </View>
        )}
        {data.manager && data.unit && (
          <View style={s.manager}>
            <View style={s.managerContact}>
              <Text style={s.managerText}>Персональный менеджер:</Text>
              <Text style={s.managerText}>{data.manager?.value}</Text>
              <Text style={s.managerText}>+7 800 101 06 76</Text>
              <Text style={s.managerText}>+{data.unit.phone} (WhatsApp)</Text>
              {/*<Text style={s.managerText}>+7 996 634 22 78 (WhatsApp)</Text>*/}
              <Text style={s.managerText}>@artehome_bot (Telegram)</Text>
              <Text style={s.managerText}>{data.manager?.email}</Text>
            </View>
            <View style={s.managerPhoto}>
              <Image
                style={s.managerPhotoImg}
                src={`img/managers/${data.manager?.photo}.png`}
              />
            </View>
          </View>
        )}
      </Page>
      {/* )} */}
      {data?.products.length > 0 &&
        data?.products.map((prod, index) => (
          <Page key={prod.id} style={s.root}>
            <Image
              style={s.mainImage}
              src={`img/type/${getMainPhoto(
                prod.nameImage?.value,
                prod.model?.value
              )}.jpg`}
            />
            <View style={s.description}>
              <View style={s.left}>
                <Text style={s.dText}>
                  Помещение №{index + 1}: {prod.nameFlat || '-'}
                </Text>
                <Text style={s.dText}>Площадь: {prod.square || '-'} м²</Text>
                <Text style={s.model}>{prod.model?.value || '-'}</Text>
                <Text style={s.dText}>
                  {prod.sizes?.value || '-'} (ДхШ);{' '}
                  {prod.countSections?.value || 0} секции
                </Text>
                <Text style={s.dText}>
                  Теплоотдача: {prod.teplo?.value || '-'} Вт
                </Text>
                <Text style={s.dText}>{prod.type || '-'}</Text>
                <Text style={s.dText}>
                  Подключение: {prod.typeUse?.value || '-'}
                </Text>
                <Text style={s.dText}>
                  {prod.color?.value || '-'}
                  <Text style={s.sText}>
                    {prod.color?.bigPrice ? ' + 10% к цене' : ''}
                  </Text>
                </Text>
                <Text>Цена: {prod.price || '-'} руб.</Text>
              </View>
              <View style={s.right}>
                <View style={s.schemeRight}>
                  <Image
                    src={`img/scheme/${getPhoto(
                      'schemePhoto',
                      prod.model?.value
                    )}.png`}
                    style={s.schemeImage}
                  />
                </View>
              </View>
            </View>
            <View style={s.schemes}>
              <View style={s.scheme}>
                <Image
                  src={`img/schemeIn/${getModelScheme(
                    'modelPhoto',
                    prod.type,
                    prod.typeUse?.value
                  )}.png`}
                  style={s.schemeImage}
                />
              </View>
              {/* <View style={s.scheme}> */}
              {/*  <Image */}
              {/*    src={`img/sections/${getPhoto( */}
              {/*      'sectionPhoto', */}
              {/*      prod.model?.value */}
              {/*    )}.png`} */}
              {/*    style={s.schemeImage} */}
              {/*  /> */}
              {/* </View> */}
            </View>
            <View style={s.footer}>
              <Text>В комплекте: {tables?.info?.set || ''}</Text>
              <Text>Изготовление: {tables?.info?.manufac || ''}</Text>
            </View>
          </Page>
        ))}
    </Document>
  );
};

MyDocument.propTypes = {
  data: PropTypes.object,
  tables: PropTypes.object,
};

export default MyDocument;
