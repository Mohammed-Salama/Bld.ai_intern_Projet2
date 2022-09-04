import React from 'react'
import styles from './HomePageSecondContainerStyle.module.css'
import CardsSection from './CardsSection.js'
import TabsBar from './TabsBar'
function HomePageSecondContainer() {
  return (
    <>
    
    <div className={styles.welcome_page_second_container}>
        <h1 className={styles.courses_container_text_tilte}>A broad selection of courses</h1>
        <p className={styles.courses_container_text_description}>Choose from 185,000 online video courses with new additions published every month</p>
        <TabsBar/>
        <CardsSection/>
    </div> 

    </>
  )
}

export default HomePageSecondContainer

 