import React from 'react' 
import { storiesOf } from '@kadira/storybook' 
import Search from './index' 
// import styles from './SearchStyle.css' 

storiesOf('Search', module)
  .add('to Search', () => (
    <Search />
  )) 
