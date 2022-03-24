import React from 'react';
import Painel from '../../Painel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingFeedShare: React.FC = () => {
  return (
      <Container>
          <Painel className='no-shadow'>
            <Skeleton className='row-skeleton'/>
            <Skeleton className='row-skeleton'/>
          </Painel>
      </Container>
  );
}

export default LoadingFeedShare;