import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  )
}
export default Button