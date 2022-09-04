import React from 'react'
import Card from './Card'
import styles from './CardsSectionStyle.module.css'
import {CoursesDataContext} from '../App.js';
function CardsSection() {
  const data = React.useContext(CoursesDataContext);
  return (
    <div className={styles.courses_container}>
        <h1 className={styles.courses_container_title}>{data.title}</h1>
        <p className={styles.courses_container_description}>{data.description}</p>
        <button className={styles.explore_button}>{"Explore "+data.topic}</button>
        <div className={styles.courses_cards_box}>
            {data.courses.map(course => (
                <Card key={course.id} data={course}/>
            ))}
        </div>
    </div>
  )
}

export default CardsSection