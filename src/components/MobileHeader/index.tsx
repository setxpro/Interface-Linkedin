import React from 'react';

import { Container, ProfileCircle, Search, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
        <ProfileCircle src="https://github.com/setxpro.png" alt="avatar"/>
        <Search placeholder="Pesquisar"/>
        <MessageIcon/>
    </Container>
  );
}

export default MobileHeader;