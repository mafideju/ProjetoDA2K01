import React, { Component } from 'react';
import Title from '../components/Title';
import Square from '../components/Square';
import Button from '../components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: []
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('EVENTS =>', e)
  }

  render() {
    return (
      <div>
        <Title title='React com Da2k' />
        <div style={{ display: 'flex' }}>
          {['red', 'yellow', 'green'].map((color, index) => (
            <Square
              color={color}
              key={index}
            />
          ))}
        </div>
        <Button handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;