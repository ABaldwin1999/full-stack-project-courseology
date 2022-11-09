import React from 'react'
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './CourseInfo.scss';
const CourseInfo = ({thisCourse,user}) => {
  return (
    <div>
      <div className='course__bookmark'>
        {user&& <Button text="Bookmark" buttonStyle="button__form"/>}
      </div>
      <h1>{thisCourse.title}</h1>
      <h2>Course leader = {thisCourse.createdBy}</h2>
      <p>{thisCourse.syllabus}</p>
      <p>Price: £{thisCourse.price}</p>
    </div>
  )
}

export default CourseInfo