import React , {useCallback} from 'react'
import ReviewComponent from './ReviewComponent'
import styles from './CourseReviewsSectionStyles.module.css'
import { Spoiler } from '@mantine/core';
function CourseReviewsSection(props) {
    const reviews = props.data.map(review => (
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

        <Spoiler controlRef={spoilerControlRef} maxHeight={485} showLabel="More reviews" hideLabel="Less reviews">
            {reviews}
        </Spoiler>
    </>
  )
}

export default CourseReviewsSection