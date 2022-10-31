import React from 'react'
import { useState } from "react";
import Button from '../Button/Button';
import './CourseForm.scss';
const CourseForm = ({ defaultFormState, handleSubmit, formTitle }) => {
    const [input, setInput] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

   if (Object.values(input).some(value => !value)) {
      alert("Missing content, unable to proceed");
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
          placeholder="Input Course Title"
          value={input.title}
          onInput={event => setInput({ ...input, title: event.target.value })}
        />
        </label>
        <input
          className="form-container__input"
          type="text"
          placeholder="Input Course Leader"
          value={input.createdBy}
          onInput={event => setInput({ ...input, createdBy: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Input Syllabus"
          value={input.syllabus}
          spell="true"
          onInput={event => setInput({ ...input, syllabus: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Input Category"
          value={input.category}
          onInput={event => setInput({ ...input, category: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Input Course Price"
          value={input.price}
          onInput={event => setInput({ ...input, price: event.target.value })}
        />
        <Button buttonType="submit" buttonStyle="button__form" text="Submit"/>

      </form>
    </div>
    )
}


export default CourseForm