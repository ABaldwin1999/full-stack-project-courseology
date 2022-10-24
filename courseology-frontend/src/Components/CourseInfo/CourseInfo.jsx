import React from 'react'
import Button from '../Button/Button';
import './CourseInfo.scss';
const CourseInfo = ({courseArr,user}) => {
  return (
    <div>CourseInfo

      {user&& <Button text="Bookmark"/>}
      {admin&& <Button text="Update"/>}
      {admin&& <Button text="Delete"/>}
    </div>
  )
}

export default CourseInfo