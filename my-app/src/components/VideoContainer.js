import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import styles from './VideoContainerStyles.module.css'
function VideoContainer(props) {
  return (
    <div  className={styles.outter_container} style={{backgroundImage: `url(${props.data.img})`}} >
          <FontAwesomeIcon icon={faCirclePlay} className={styles.play_icon} />
          <h4  className={styles.preview_text}>Preview this course</h4>
    </div>   
  )
}

export default VideoContainer