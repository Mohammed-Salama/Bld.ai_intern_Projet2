import React from 'react'
import styles from './CoursePageTopContainerStyles.module.css'
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CoursePageTopContainer(props) {   
  return (
    <>
    <div className={styles.course_page_top_container}>
        <h5 className={styles.course_title}>{props.data.title}</h5>
        <h5 className={styles.rating}>{props.data.stars}</h5>
        <FontAwesomeIcon className={styles.star} fontSize="small" icon={faStar}></FontAwesomeIcon>
        <button className={styles.ratings_count_button}><u>{"("+props.data.ratings_count+" ratings)"}</u></button>
        <p className={styles.students_count}>{props.data.students+" students"}</p>
    </div>
    </>
  )
}

export default CoursePageTopContainer