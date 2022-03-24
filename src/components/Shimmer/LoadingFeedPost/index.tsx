import React from 'react';
import Painel from '../../Painel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingFeedPost: React.FC = () => {
  return (
      <Container>
          <Painel className='no-shadow'>
            <header>
                <Skeleton className='avatar-skeleton'/>
            <div className="column">
                <Skeleton className='row-skeleton'/>
                <Skeleton className='row-skeleton'/>
            </div>
            </header>
            <span>
                <Skeleton className='row-skeleton'/>
                <Skeleton className='row-skeleton'/>
            </span>
          </Painel>
      </Container>
  );
}

export default LoadingFeedPost;