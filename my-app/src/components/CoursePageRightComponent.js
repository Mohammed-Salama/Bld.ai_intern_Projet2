import React from 'react'
import styles from './CoursePageRightComponentStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
function CoursePageRightComponent(props) {
  return (
    <div className={styles.outer_container}>
        <div className={styles.top_container} style={{backgroundImage: `url(${props.data.img})`} }>
          <FontAwesomeIcon icon={faCirclePlay}  className={styles.play_icon} />
          <h4 className={styles.preview_text}>Preview this course</h4>
        </div>
        <h2 className={styles.price}>E£{props.data.price}</h2>
        <button className={styles.add_to_cart_button}>Add to cart</button>
        <button className={styles.buy_button}>Buy now</button>
        <h4 className={styles.include_text}>This course includes:</h4>
    </div>
  )
}

export default CoursePageRightComponent