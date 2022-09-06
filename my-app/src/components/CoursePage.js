import React from 'react'
import {CoursesDataContext} from '../App.js';
import {useParams} from 'react-router-dom';
import CoursePageTopContainer from './CoursePageTopContainer';
import CoursePageSecondContainer from './CoursePageSecondContainer';
import CoursePageThirdContainer from './CoursePageThirdContainer';




function CoursePage() {
  const courseID = useParams();
  const data = React.useContext(CoursesDataContext);
  const courseData = data.courses.find(course => course.id === courseID.courseId, 'lol');
  return (
    <>
      <CoursePageTopContainer data={courseData}/>
      <CoursePageSecondContainer data={courseData}/>
      <CoursePageThirdContainer data={courseData}/>
    </>
  )
}

export default CoursePage