import React from 'react'
import { useState } from "react";
import Button from '../Button/Button';
const UserForm = ({ defaultFormState, handleSubmit, formTitle }) => {
    const [input, setInput] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

   if (Object.values(input).some(value => !value)) {
      alert("Missing content, unable to proceed");
     return;
   }
   else if(input.password !== input.confirmPassword){
    alert("Please enter matching password")
    return;
   }

    handleSubmit(input);
  };

  return (
    <div className="form-container">
      <h3 className="form-container__title">{formTitle}</h3>
      <form className="form-container__form" onSubmit={handleValidation}>
     <label >
      <input
          className="form-container__input"
          type="text"
          placeholder="User Name"
          value={input.username}
          onInput={event => setInput({ ...input, username: event.target.value })}
        />
        </label>
        <input
          className="form-container__input"
          type="text"
          placeholder="Email"
          value={input.email}
          onInput={event => setInput({ ...input, email: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Password"
          value={input.password}
          spell="true"
          onInput={event => setInput({ ...input, password: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Confirm Password"
          value={input.confirmPassword}
          onInput={event => setInput({ ...input, confirmPassword: event.target.value })}
        />
        <Button buttonType="submit" buttonStyle="button__form" text="Submit"/>
      </form>
    </div>
    )
}


export default UserForm