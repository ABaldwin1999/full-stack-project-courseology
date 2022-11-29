import React from 'react'
import './HomeBar.scss';
import Button from '../Button/Button';
import Profile from '../Profile/Profile';
import { Link } from "react-router-dom";
import Login from '../Login/Login';
const HomeBar = ({user,userLogin ,admin,toggle,displayed,defaultUserState,toggleLogin, showLogin,handleLogin,logout}) => {
  return (
    <div className='home-bar'>
      <Link to={"/"} style={{ textDecoration: "none" }}> <h1>Courseology</h1></Link> 
      <div className='home-bar__buttons'>
        {!user&& <Button clickEvent={toggleLogin} text="Login" buttonStyle="button__login" />}
        {user&& <Profile toggle={toggle} displayed={displayed} userLogin={userLogin} logout={logout}/>}
        {admin&&  <Link to={"/courses/create"} style={{ textDecoration: "none" }}><Button text="Create Course" buttonStyle="button__login" /></Link>}
        {showLogin &&<Login toggleLogin={toggleLogin} defaultUserState={defaultUserState} handleLogin={handleLogin}/>}
      </div>
    </div>
  )
}

export default HomeBar