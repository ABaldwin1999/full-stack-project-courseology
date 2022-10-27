import React from 'react'
import './Button.scss'
const Button = ({buttonStyle, clickEvent,text}) => {
  return (
    <button onClick={clickEvent} className={"button "+buttonStyle}>{text}</button>
  )
}

export default Button