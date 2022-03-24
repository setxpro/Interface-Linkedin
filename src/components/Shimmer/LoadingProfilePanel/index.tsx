import React from 'react';
import Painel from '../../Painel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingProfilePanel: React.FC = () => {
  return (
    <Container>
      <Painel className='no-shadow'>
        <Skeleton className='bg-skeleton'/>
        <span>
          <Skeleton className='avatar-skeleton'/>
          <Skeleton className='row-skeleton'/>
          <Skeleton className='row-skeleton'/>
        </span>
      </Painel>
    </Container>
  );
}

export default LoadingProfilePanel;