import React from 'react';

import Panel from '../../Painel';

import { Container, HashtagIcon } from './styles';

const tags = ['data-sience', 'next-level', 'node', 'react', 'developer'];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Hashtags seguidas</span>

        {tags.map((item) => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
