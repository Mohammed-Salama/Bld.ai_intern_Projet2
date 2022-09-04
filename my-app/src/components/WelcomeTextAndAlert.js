import React from 'react'
import styles from './WelcomeAndAlertStyle.module.css'
function WelcomeTextAndAlert() {
  return (
        <div className={styles.welcome_page_first_container}>
            <div className={styles.welcome_text_container}>
                <h1 className={styles.welcome_text_tilte}>New to Udemy? Lucky you.</h1>
                <p className={styles.welcome_text_description}>Courses start at E£169.99. Get your new-student offer before it expires.</p>
            </div>
            <img src="./imgs/udemy-alarm.jpg" alt="udemy alarm"/>
        </div>
  )
}

export default WelcomeTextAndAlert