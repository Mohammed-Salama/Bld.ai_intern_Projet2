import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from './CoursePageFooterStyles.module.css'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
function CoursePageFooter() {
    const footer_mid_buttons = [
        {
            text: "Udemy Business",
        },
        {
            text: "Teach on Udemy",
        },
        {
            text: "Get the app",
        },
        {
            text: "About us",
        },
        {
            text: "Contact us",
        },
        {
            text: "Careers",
        },
        {
            text: "Blog",
        },
        {
            text: "Help and Support",
        },
        {
            text: "Affiliate",
        },
        {
            text: "Investors",
        },
        {
            text: "Terms",
        },
        {
            text: "Privacy policy",
        },
        {
            text: "Cookie settings",
        },
        {
            text: "Sitemap",
        },
        {
            text: "Accessibility statement",
        }
    ];

  return (
    <footer>
        <div className={styles.footer_outer_container}>
            <div className={styles.footer_top_container}>
                <div className={styles.footer_top_left_container}>
                    <h3 className={styles.footer_title}>Top companies choose</h3>
                    <button className={styles.footer_title_button}>Udemy Business</button>
                    <h3 className={styles.footer_title}>to build in-demand career skills.</h3>
                </div>
                <div className={styles.footer_top_right_container}>
                    <img className={styles.footer_img} src='/imgs/nasdaq.svg' alt='nasdaq_logo'/>
                    <img className={styles.footer_img} src='/imgs/volkswagen.svg' alt='volkswagen_logo'/>
                    <img className={styles.footer_img} src='/imgs/box_company.svg' alt='box_company_logo'/>
                    <img className={styles.footer_img} src='/imgs/netapp.svg' alt='netapp_logo'/>
                    <img className={styles.footer_img} src='/imgs/eventbrite.svg' alt='eventbrite_logo'/>
                </div>
            </div>

            <div className={styles.footer_mid_container}>
                <div className={styles.footer_mid_left_container}>
                    {footer_mid_buttons.map((button,index) => (
                        <button key={index} className={styles.footer_mid_button}>{button.text}</button>
                    ))}
                </div>
                <div className={styles.footer_mid_right_container}>
                    <button className={styles.footer_language_button}>
                        <FontAwesomeIcon className={styles.globe_icon} icon={faGlobe} ></FontAwesomeIcon> English
                    </button>
                </div>
            </div>

            <div className={styles.footer_bottom_container}>
                <img className={styles.footer_logo} src="/imgs/udemy_logo_inverted.svg" alt="udemy_logo"></img>
                <p className={styles.footer_copyright_text}>© 2021 Udemy, Inc.</p>
            </div>
        </div>
    </footer>
    
  )
}

export default CoursePageFooter