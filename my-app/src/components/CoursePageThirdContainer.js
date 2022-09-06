import React , {useState} from 'react'
import styles from './CoursePageThirdContainerStyles.module.css'
import WhatYouWillLearn from './WhatYouWillLearn'
import DropDown from './DropDown'
function CoursePageThirdContainer(props) {
  const [expand_collapse , setExpand_collapse] = useState("Expand");
  const [dropDowns , setDropDowns] = useState(props.data.content.map((dropDown,index) => 
  <DropDown key={index} data={dropDown} first_state={0}></DropDown>
));
  function toggleExpandCollapse() {
    let num = props.data.content.length;
    if (expand_collapse === "Expand") {
      setExpand_collapse("Collapse");
      setDropDowns( props.data.content.map((dropDown,index) => 
      <DropDown key={index+num} data={dropDown} first_state={1}></DropDown>))
    } else {
      setExpand_collapse("Expand");
      setDropDowns( props.data.content.map((dropDown,index) => 
      <DropDown key={index} data={dropDown} first_state={0}></DropDown>))
    }
  }
   
  const requirements = props.data.requirements.map((requirement,index) => {
    return (
      <li key={index} className={styles.requirement_list_item}>{requirement}</li>
    )
  }
  )


  return (
    <div className={styles.course_page_third_container}>
      <div id = "liop" className={styles.inner_container}>
        <WhatYouWillLearn data={props.data} />
        <h2 className={styles.content_title}>Course content</h2>
        <div className={styles.info_and_expand}>
          <p className={styles.course_info}>{props.data.sections_num+" sections. "+props.data.lectures_num+" lecture. "+props.data.total_length+" total length."}</p>
          <button className={styles.expand_collapse_button} onClick={toggleExpandCollapse}>{expand_collapse + " all sections"}</button>
        </div>
        {dropDowns}
        <h2 className={styles.content_title}>Requirements</h2>
        <ul className={styles.requirements}>
          {requirements}
        </ul>
      </div>
    </div>
  )
}

export default CoursePageThirdContainer