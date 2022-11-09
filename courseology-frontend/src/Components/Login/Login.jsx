import React from 'react'
import './Login.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = ({handleLogin, defaultUserState,toggleLogin}) => {
  const [input, setInput] = useState(defaultUserState);
  const handleValidation = event => {
    event.preventDefault();

   if (Object.values(input).some(value => !value)) {
      alert("Missing content, unable to proceed");
     return;
   }

    handleLogin(input);
  };
  return (
    <div className='overlay'>
    <div className="login-prompt">
      <h2 className="login-prompt__title">Login</h2>
      <form onSubmit={handleValidation} className="login-prompt__content">
        <label htmlFor="login">Username:</label>
      <input type="text" id="login" onInput={event => setInput({ ...input, username: event.target.value})}/>
      <label htmlFor="login">Password:</label>
      <input type="password" id="password" onInput={event => setInput({ ...input, password: event.target.value})}/>
      <div className="login-prompt__button-holder">
        <Button buttonType="submit" buttonStyle="button__form" text="Login"/>
        <Link to={"/user/create"}  style={{ textDecoration: "none" }} onClick={toggleLogin}>
          <p>Create Account</p>
        </Link>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login
