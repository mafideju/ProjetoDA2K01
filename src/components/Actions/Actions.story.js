import React from 'react' 
import { storiesOf, action } from '@kadira/storybook' 
import Actions from './index' 

storiesOf('Actions', module)
  .add('to Actions', () => (
    <Actions
      getRepos={action('getRepos')}
      getStarred={action('getStarred')}
    />
  )) 

// 😀 😎 👍 💯
