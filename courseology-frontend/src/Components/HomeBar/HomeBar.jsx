import React from 'react'
import './HomeBar.scss';
import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import { Link } from "react-router-dom";
const HomeBar = ({user,admin,toggle,displayed}) => {
  return (
    <div className='home-bar'>
      <Link to={"/"} style={{ textDecoration: "none" }}> <h1>Courseology</h1></Link> 
      <div className='home-bar__buttons'>
        {!user&& <Button text="Login" buttonStyle="button__login" />}
        {!user&& <Profile toggle={toggle} displayed={displayed}/>}
        {!user&&  <Link to={"/courses/create"} style={{ textDecoration: "none" }}><Button text="Create Course" buttonStyle="button__login" /></Link>}
      </div>
    </div>
  )
}

export default HomeBar