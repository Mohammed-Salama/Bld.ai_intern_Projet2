import React from 'react'
import styles from './CoursePageThirdContainerStyles.module.css'
import WhatYouWillLearn from './WhatYouWillLearn'
function CoursePageThirdContainer(props) {
  return (
    <div className={styles.course_page_third_container}>
      <div className={styles.inner_container}>
        <WhatYouWillLearn data={props.data} />
      </div>
    </div>
  )
}

export default CoursePageThirdContainer