import React, { useState } from "react";
import Heart from "react-heart"
import styles from './PopUpComponentStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
function PopUpComponent(props) {
    const [isFavClick, setFavClick] = useState(false);
  return(
    <div className={styles.pop_up_container}>
      <h3 className={styles.pop_up_title}>{props.data.title}</h3>
      <p className={styles.pop_up_updated_text}>Updated {props.data.last_updated}</p>
      <p className={styles.pop_up_hours_text}>{props.data.total_hours} total hours</p>
      <p className={styles.pop_up_description_text}>{props.data.description}</p>
      {props.data.learning_points?.map((point, index) => {
        return (
          <div key={index} className={styles.pop_up_learning_point_container}>
            <FontAwesomeIcon className={styles.check_icon} icon={faCheck}></FontAwesomeIcon>
            <p className={styles.pop_up_learning_point_text}>{point}</p>
          </div>
        )})}
      <div className={styles.pop_up_last_raw_container}>
        <button className={styles.pop_up_add_to_cart_button}>Add to cart</button>
        <span className={styles.heart_container}><Heart className={styles.heart_button} isActive={isFavClick} onClick={() => setFavClick(!isFavClick)}/></span>
      </div>
    </div>
  )
}

export default PopUpComponent