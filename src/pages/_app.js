import 'styles/common.scss';
import Header from 'components/Header';
import DataProvider from 'providers/dataProvider';
import RequestProvider from 'providers/requestProvider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <RequestProvider>
        <Header />
        <Component {...pageProps} />
      </RequestProvider>
    </DataProvider>
  );
};

export default MyApp;
