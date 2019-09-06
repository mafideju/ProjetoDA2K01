import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Storybook Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span aria-label="emoji">
        <img src="#" alt="" />😀 😎 👍 💯
      </span>
    </Button>
  ));
