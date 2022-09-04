import React from 'react'
import styles from './CoursesPageStyle.module.css'
import { useParams } from 'react-router-dom';
function CoursePage() {
  const { courseId } = useParams();
  return (
    <div className={styles.lol}>CoursePage {courseId}</div>
  )
}

export default CoursePage