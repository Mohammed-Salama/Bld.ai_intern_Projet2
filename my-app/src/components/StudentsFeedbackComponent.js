import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import styles from './StudentsFeedbackComponentStyles.module.css';
import {Rating} from 'react-simple-star-rating'

function StudentsFeedbackComponent(props) {
  return (
    <>
        <h2 className={styles.students_feedback_container_title}>Students feedback</h2>
        <div className={styles.feedback_outer_container}>
            <div className={styles.left_container}>
                <h1 className={styles.rating_num}>{props.data.avg_stars}</h1>
                <Rating readonly={true} allowHover={false} onClick={()=>{}} initialValue={props.data.avg_stars} size={21}></Rating>
                <h4 className={styles.course_rating_text}>Course Rating</h4>
            </div>
            <div className={styles.right_container}>
                <div className={styles.right_container_inner_raw}>
                    <ProgressBar className={styles.progress_bar} height="10px" bgColor="rgb(95,95,95)" borderRadius="0px" completed={props.data.five_stars_percentage} isLabelVisible={false}  />
                    <Rating className={styles.right_stars_bar} readonly={true} allowHover={false} onClick={()=>{}} initialValue={5} size={18}></Rating>
                    <p className={styles.percentage_text}><u>{props.data.five_stars_percentage}%</u></p>
                </div>
                <div className={styles.right_container_inner_raw}>
                    <ProgressBar className={styles.progress_bar} height="10px" bgColor="rgb(95,95,95)" borderRadius="0px" completed={props.data.four_stars_percentage} isLabelVisible={false}  />
                    <Rating className={styles.right_stars_bar} readonly={true} allowHover={false} onClick={()=>{}} initialValue={4} size={18}></Rating>
                    <p className={styles.percentage_text}><u>{props.data.four_stars_percentage}%</u></p>
                </div>
                <div className={styles.right_container_inner_raw}>
                    <ProgressBar className={styles.progress_bar} height="10px" bgColor="rgb(95,95,95)" borderRadius="0px" completed={props.data.three_stars_percentage} isLabelVisible={false}  />
                    <Rating className={styles.right_stars_bar} readonly={true} allowHover={false} onClick={()=>{}} initialValue={3} size={18}></Rating>
                    <p className={styles.percentage_text}><u>{props.data.three_stars_percentage}%</u></p>
                </div>
                <div className={styles.right_container_inner_raw}>
                    <ProgressBar className={styles.progress_bar} height="10px" bgColor="rgb(95,95,95)" borderRadius="0px" completed={props.data.two_stars_percentage} isLabelVisible={false}  />
                    <Rating className={styles.right_stars_bar} readonly={true} allowHover={false} onClick={()=>{}} initialValue={2} size={18}></Rating>
                    <p className={styles.percentage_text}><u>{props.data.two_stars_percentage}%</u></p>
                </div>
                <div className={styles.right_container_inner_raw}>
                    <ProgressBar className={styles.progress_bar} height="10px" bgColor="rgb(95,95,95)" borderRadius="0px" completed={props.data.one_star_percentage} isLabelVisible={false}  />
                    <Rating className={styles.right_stars_bar} readonly={true} allowHover={false} onClick={()=>{}} initialValue={1} size={18}></Rating>
                    <p className={styles.percentage_text}><u>{props.data.one_star_percentage}%</u></p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default StudentsFeedbackComponent