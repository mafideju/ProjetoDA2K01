import React from 'react'

const Square = props => {
  return (
    <div style={{
      backgroundColor: props.color,
      borderRadius: '5%',
      height: '200px',
      marginRight: '10px',
      width: '200px'
    }}>
      <h3 style={{ padding: '70px' }}>
        Square
      </h3>
    </div>
  )
}

Square.defaultProps = {
  color: 'red'
}

export default Square;