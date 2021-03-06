import React from 'react';
import Painel from '../../Painel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadindTrendingPanel: React.FC = () => {

    const Row = () => (
        <div className='row'>
            <Skeleton className='square-skeleton white'/>

            <div className="column">
                <Skeleton className='row-skeleton white'/>
                <Skeleton className='row-skeleton white'/>
            </div>
        </div>

    )

  return (
      <Container>
       <Row/>
       <Row/>
       <Row/>
      </Container>
  );
}

export default LoadindTrendingPanel;