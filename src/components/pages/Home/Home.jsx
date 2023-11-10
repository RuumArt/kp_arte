import React from 'react';
import RequestForm from 'components/RequestForm';

import Container from 'components/Container';
import PageWrap from 'components/PageWrap';
import Text from 'components/Text';
import { useData } from 'providers/dataProvider/useData';
import s from './Home.module.scss';

const Home = () => {
  const { data, isLoading, error } = useData();

  return (
    <PageWrap className={s.root}>
      <Container>
        {isLoading && <Text>Загрузка...</Text>}
        {!isLoading && <RequestForm data={data} />}
        {error && <Text>{error}</Text>}
      </Container>
    </PageWrap>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);
