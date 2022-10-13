import React from 'react'
import styles from './WhatYouWillLearnStyles.module.css'
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function WhatYouWillLearn(props) {
    const leaning_points = props.data.learning_points?.map((point,index) => 
    <li key={index} className={styles.list_item}>
        <FontAwesomeIcon className={styles.icon} icon={faCheck} fontSize="small"></FontAwesomeIcon>
        {point}
    </li>)
  return (
    <div className={styles.outer_container}>
        <h2>What you'll learn</h2>
        <ul className={styles.inner_container}>
            {leaning_points}
        </ul>
    </div>
  )
}

export default WhatYouWillLearn