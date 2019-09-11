import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from './index';

storiesOf('Pagination', module)
  .add('to Link Only', () => (
    <Pagination
      total={10}
      activePage={5}
      pageLink="http://localhost:7711/%page%"
    />
  )).add('to Pagination', () => (
    <Pagination
      total={10}
      activePage={5}
      pageLink="http://localhost:7711/%page%"
      onClick={(page) => { window.console.log(page); }}
    />
  ));
