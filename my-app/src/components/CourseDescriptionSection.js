import React , {useCallback}  from 'react'
import styles from './CourseDescriptionSectionStyles.module.css'
import ViewHTML from './ViewHTML'
import { Spoiler } from '@mantine/core';
function CourseDescriptionSection(props) {

    const  spoilerControlRef = useCallback(node => {
        if (node !== null) {
          node.className = styles.show_more_and_less_button;
        }
      }, []);
  return (
    <div  className={styles.description_section}>
        <h2 className={styles.description_title}>Description</h2>
        <Spoiler controlRef={spoilerControlRef} maxHeight={250} showLabel="Show more" hideLabel="Show less">
            <ViewHTML data={props.data}/>
        </Spoiler>
    </div>
  )
}

export default CourseDescriptionSection