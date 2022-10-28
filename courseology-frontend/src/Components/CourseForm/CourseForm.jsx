import React from 'react'
import { useState } from "react";
import './CourseForm.scss';
const CourseForm = ({ defaultFormState, handleSubmit, formTitle }) => {
    const [input, setInput] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

   // if (Object.values(input).some(value => !value)) {
    ///  alert("Missing content, unable to proceed");
   //   return;
   // }

    handleSubmit(input);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
      <input
          className="form-container__input"
          type="text"
          placeholder="eg. Science"
          value={input.title}
          onInput={event => setInput({ ...input, title: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="eg. Jane Doe"
          value={input.createdBy}
          onInput={event => setInput({ ...input, createdBy: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="syllabus"
          value={input.syllabus}
          spell="true"
          onInput={event => setInput({ ...input, syllabus: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="category"
          value={input.category}
          onInput={event => setInput({ ...input, category: event.target.value })}
        />
        <input
          className="form-container__input"
          type="number"
          placeholder="£0.00"
          value={input.price}
          onInput={event => setInput({ ...input, price: event.target.value })}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
    )
}


export default CourseForm