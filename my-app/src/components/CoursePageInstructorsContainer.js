import React from 'react'
import Instructor from './Instructor';
import styles from './CoursePageInstructorsContainerStyles.module.css';
function CoursePageInstructorsContainer(props) {
    const Instructors = props.data.map((instructor, index) => 
    <Instructor data={instructor} key={index} />);
  return (
    <div className={styles.instructors_container}>
        <h2 className={styles.instructors_container_title}>Instructors</h2>
        {Instructors}
    </div>
  )
}

export default CoursePageInstructorsContainer