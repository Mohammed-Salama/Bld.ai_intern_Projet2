import React from 'react'
import Card from './Card'
import styles from './CardsSectionStyle.module.css'
import {CoursesDataContext} from '../App.js';


function CardsSection() {
  const data = React.useContext(CoursesDataContext).courses_data;
  const searchParameters = React.useContext(CoursesDataContext).courses_filter;
  const courses = data.courses;

  const filteredCourses = courses.filter(course => (!searchParameters.get('courses_filter')) || course.title.toLowerCase().includes(searchParameters.get('courses_filter').toLowerCase()));
  return (
    
    <div className={styles.courses_container}>
        <h1 className={styles.courses_container_inner_title}>{data.title}</h1>
        <p className={styles.courses_container_inner_description}>{data.description}</p>
        <button className={styles.explore_button}>{"Explore "+data.topic}</button>
        <div className={styles.courses_cards_box}>
            {filteredCourses.map(course => (
              <Card key={course.id} data={course}/>
            ))}
            
        </div>
    </div>
  )
}

export default CardsSection
