import React , {useCallback} from 'react'
import ReviewComponent from './ReviewComponent'
import styles from './CourseReviewsSectionStyles.module.css'
import { Spoiler } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
function CourseReviewsSection(props) {
    const reviews = props.data?.map(review => (
        <ReviewComponent key={review.id} data={review}/>
    ));
    const  spoilerControlRef = useCallback(node => {
      if (node !== null) {
        node.className = styles.show_more_and_less_button;
      }
    }, []);
  return (
    <>
        <h2 className={styles.reviews_title}>Reviews</h2>
        <div className={styles.filter_reviews_section}>
          <form className={styles.reviews_search_form}>
              <input className={styles.reviews_search_input} type="text" placeholder="Search reviews"></input>
              <button className={styles.reviews_search_button}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
          </form>
          <select className={styles.select_ratings}>
            <option>All ratings</option>
            <option>1 Star</option>
            <option>2 Stars</option>
            <option>3 Stars</option>
            <option>4 Stars</option>
            <option>5 Stars</option>
        </select>
        </div>
        <Spoiler controlRef={spoilerControlRef} maxHeight={485} showLabel="More reviews" hideLabel="Less reviews">
            {reviews}
        </Spoiler>
    </>
  )
}

export default CourseReviewsSection