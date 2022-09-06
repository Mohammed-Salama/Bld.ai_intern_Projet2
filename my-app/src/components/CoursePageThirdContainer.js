import React from 'react'
import styles from './CoursePageThirdContainerStyles.module.css'
import WhatYouWillLearn from './WhatYouWillLearn'
import DropDown from './DropDown'
function CoursePageThirdContainer(props) {
  const dropDowns = props.data.content.map((dropDown,index) => {
    return (
      <DropDown
        key={index}
       data = {dropDown}
      />
    )
  }
  )
  return (
    <div className={styles.course_page_third_container}>
      <div className={styles.inner_container}>
        <WhatYouWillLearn data={props.data} />
        <h2 className={styles.content_title}>Course content</h2>
        <p className={styles.course_info}>{props.data.sections_num+" sections. "+props.data.lectures_num+" lecture. "+props.data.total_length+" total length."}</p>
        {dropDowns}
      </div>
    </div>
  )
}

export default CoursePageThirdContainer