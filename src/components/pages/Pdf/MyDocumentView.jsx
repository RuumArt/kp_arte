import React from 'react';
import { StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useRequest } from 'providers/requestProvider/useRequest';
import { useData } from 'providers/dataProvider/useData';
import Text from 'components/Text/Text';
import MyDocument from './MyDocument';

const s = StyleSheet.create({
  viewer: {
    position: 'relative',
    zIndex: '2',
    width: '100%',
    height: '100vh',
    border: '0',
  },
});

const MyDocumentView = () => {
  const { request } = useRequest();
  const { data, isLoading, error } = useData();

  if (isLoading) return <Text>Загрузка...</Text>;

  return (
    <PDFViewer style={s.viewer}>
      <MyDocument data={request} tables={data} />
    </PDFViewer>
  );
};

MyDocumentView.propTypes = {};

MyDocumentView.defaultProps = {};

export default MyDocumentView;
