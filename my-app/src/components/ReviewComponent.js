import React , {useCallback} from 'react'
import styles from './ReviewComponentStyles.module.css'
import {Rating} from 'react-simple-star-rating'
import { Spoiler } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import ReactTimeAgo from 'react-time-ago'
function ReviewComponent(props) {
  const  spoilerControlRef = useCallback(node => {
    if (node !== null) {
      node.className = styles.show_more_and_less_button;
    }
  }, []);
  return (
    <div className={styles.review_outer_container}>
        <div className={styles.review_left_container}>
            <div className={styles.reviewer_image}>
                <h5 className={styles.reviewer_initials}>{props.data.user.initials}</h5>
            </div>
        </div>
        <div className={styles.review_right_container}>
            <h5 className={styles.reviewer_name}>{props.data.user.public_display_name}</h5>
            <Rating className={styles.stars_bar} readonly={true} allowHover={false} onClick={()=>{}} initialValue={props.data.rating} size={18}></Rating>
            <ReactTimeAgo className={styles.created_ago} date={new Date(props.data.created)} locale="en-US"/>
            <Spoiler controlRef={spoilerControlRef} maxHeight={60} showLabel="Show more" hideLabel="Show less">
              <p className={styles.review_text}>{props.data.content}</p>
            </Spoiler>
            <p className={styles.review_helpful_text}>Was this review helpful?</p>
            <div className={styles.like_and_dislike_outter_box}>
              <div className={styles.like_button_box}>
                  <FontAwesomeIcon className={styles.icon} icon={faThumbsUp}></FontAwesomeIcon>
              </div>
              <div className={styles.dislike_button_box}>
                  <FontAwesomeIcon className={styles.icon} icon={faThumbsDown}></FontAwesomeIcon>
              </div>
              <button className={styles.report_button}><u>Report</u></button>
            </div>
        </div>
    </div>
  )
}

export default ReviewComponent