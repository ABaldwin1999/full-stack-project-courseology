import React from 'react'
import './Button.scss'
const Button = ({buttonType, buttonStyle, clickEvent,text}) => {
  return (
    <button type={buttonType} onClick={clickEvent} className={"button "+buttonStyle}>{text}</button>
  )
}

export default Button