import React from 'react';

import LoadindTrendingPanel from '../Shimmer/LoadindTrendingPanel';
import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadindTrendingPanel/>
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
      
    </Container>
  );
};

export default RightColumn;
