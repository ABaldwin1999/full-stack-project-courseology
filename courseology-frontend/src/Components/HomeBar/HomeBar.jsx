import React from 'react'
import './HomeBar.scss';
import Button from '../Button/Button';
const HomeBar = ({user}) => {
  return (
    <div className='home-bar'>
        <h1>Courseology</h1>
      {user&& <Button text="Login" buttonStyle="button__login" />}
    </div>
  )
}

export default HomeBar