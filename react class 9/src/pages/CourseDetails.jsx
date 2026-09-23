import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
   const {courseId} =  useParams()
   console.log(courseId);
  return (
    <div>
      <h1 className='capitalize'>{courseId} Course Details</h1>
    </div>
  )
}

export default CoursesDetails