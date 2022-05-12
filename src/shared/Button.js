import React from 'react'

const Button = ({ children, styles, openClick }) => {
  return (
    <button onClick={openClick} className={`btn btn-${styles}`}>
      Button
    </button>
  )
}
Button.defaultProps = {
  styles: 'primary',
  type: 'button',
  isDisabled: false
}
export default Button
