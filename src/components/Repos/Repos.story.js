import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Repos from './index';

storiesOf('Repos', module)
  .add('to Repos', () => (
    <h1>
      <Repos
        title="Repos Test"
        repos={[{
          link: 'https://www.github.com',
          name: 'Repositórium',
        }]}
      />
    </h1>
  ));
