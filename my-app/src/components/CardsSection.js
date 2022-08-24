import React from 'react'
import Card from './Card'
import styles from './CoursesContainerStyle.module.css'
function CardsSection(props) {
  return (
    <div className={styles.courses_container}>
        <h1 className={styles.courses_container_title}>{props.data.title}</h1>
        <p className={styles.courses_container_description}>{props.data.description}</p>
        <button className={styles.explore_button}>{"Explore "+props.data.topic}</button>
        <div className={styles.courses_cards_box}>
            {props.data.courses.map(course => (
                <Card key={course.id} data={course}/>
            ))}
        </div>
    </div>
  )
}

export default CardsSection