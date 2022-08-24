import React from 'react'
import styles from './CardStyle.module.css'
import {Rating} from 'react-simple-star-rating'
function Card(props) {
  return (
    <div className={styles.course}>
        <figure className={styles.course_figure_tag}>
            <img className={styles.course_img} src={props.data.img} alt={"python_course"+` ${props.data.id}`}></img>
        </figure>
        <h4 className={styles.course_description_text}>{props.data.title}</h4>
        <p className={styles.instructor}>{props.data.instructor}</p>
        <div className={styles.stars_rating_bar}>
            <h5 className={styles.stars_count}>{props.data.stars}</h5>
            <Rating readonly={true} allowHover={false} onClick={()=>{}} initialValue={props.data.stars} size={18}></Rating>
            <p className={styles.ratings_count}>{`(${props.data.students})`}</p>
        </div>
        <h4 className={styles.course_price}>{`E£${props.data.price}`}</h4>
        {(props.data.bestseller)?<div className={styles.bestseller_badge}><h6 className={styles.bestseller_text}>Bestseller</h6> </div>:null}
    </div>
  )
}

export default Card