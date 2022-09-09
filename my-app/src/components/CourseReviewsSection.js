import React from 'react'
import ReviewComponent from './ReviewComponent'
import styles from './CourseReviewsSectionStyles.module.css'
function CourseReviewsSection(props) {
    const reviews = props.data.map(review => (
        <ReviewComponent key={review.id} data={review}/>
    ));

  return (
    <>
        <h2 className={styles.reviews_title}>Reviews</h2>
        {reviews}
    </>
  )
}

export default CourseReviewsSection