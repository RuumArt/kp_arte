import React, { useMemo } from 'react';
import useGoogleSheets from 'use-google-sheets';
import serializeTables from 'utils/serializeTables';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: 'AIzaSyBlKz9SKEQ3wK6ldvbepYzm9OaCWYKlqxo',
    sheetId: '1WRSDwUHS-FDbmWgFK5HFx-lJjdemi15T65mMUUSHueE',
  });

  const serializeData = useMemo(() => {
    return serializeTables(data);
  }, [data, loading]);

  const state = useMemo(() => {
    return {
      data: serializeData,
      isLoading: loading,
      error,
    };
  }, [error, loading, serializeData]);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;
