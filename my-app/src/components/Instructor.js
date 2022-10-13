import React , {useCallback} from 'react'
import styles from './InstructorStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faAward , faUsers , faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import ViewHTML from './ViewHTML'
import { Spoiler } from '@mantine/core';
function Instructor(props) {
  const  spoilerControlRef = useCallback(node => {
    if (node !== null) {
      node.className = styles.show_more_and_less_button;
    }
  }, []);
  return (
    <>
      <div className={styles.instructor_outer_container}>
        <h3 className={styles.name}><u>{props.data.name}</u></h3>
        <p className={styles.headline}>{props.data.headline}</p>
        <div className={styles.imgs_and_info_container}>
          <div className={styles.img_container}>
            <img className={styles.instructor_img} src={props.data.img} alt={props.data.name} />
          </div>
          <div className={styles.info_container}>
              <div className={styles.info_element}>
                <FontAwesomeIcon className={styles.info_icon} icon={faStar} />
                <p className={styles.info_text}>{props.data.instructor_rating} Instructor Rating</p>
              </div>
              <div className={styles.info_element}>
                <FontAwesomeIcon className={styles.info_icon} icon={faAward} />
                <p className={styles.info_text}>{props.data.total_reviews_count} Reviews</p>
              </div>
              <div className={styles.info_element}>
                <FontAwesomeIcon className={styles.info_icon} icon={faUsers} />
                <p className={styles.info_text}>{props.data.total_students} Students</p>
              </div>
              <div className={styles.info_element}>
                <FontAwesomeIcon className={styles.info_icon} icon={faPlayCircle} />
                <p className={styles.info_text}>{props.data.courses_count} Courses</p>
              </div>
          </div>
        </div>
        <Spoiler controlRef={spoilerControlRef} maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <ViewHTML data={props.data.about} />
        </Spoiler>
      </div>
    </>
  )
}

export default Instructor
