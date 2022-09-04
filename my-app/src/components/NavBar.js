import React from 'react'
import styles from './NavBarStyle.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart , faBars , faSearch} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavBar() {
  return (
      <nav>
          <div  className={styles.nav_bar}>
            <button className={`${styles.nav_button} ${styles.active_small}`}><FontAwesomeIcon fontSize='large' icon={faBars} /></button>
            <div className={styles.nav_logo_box}><Link to="/"><img className={styles.nav_logo} src="./imgs/udemy_logo.svg" alt="udemy logo"/></Link></div>
            <button className={`${styles.nav_button} ${styles.active_large}`}>Categories</button>
            <form className={`${styles.search_form} ${styles.active_large}`}>
                <input className={styles.search_input} placeholder="&#xF002; Search for anything" type="search"/>
                <input className={styles.nav_button} type="submit" value="Search"/>
            </form>
            <button className={`${styles.nav_button} ${styles.active_large}`}>Udemy Business</button>
            <button className={`${styles.nav_button} ${styles.active_large}`}>Teach on Udemy</button>
            <button className={`${styles.nav_button} ${styles.active_small}`}><FontAwesomeIcon fontSize='large' icon={faSearch} /></button>
            <button className={styles.nav_button}><FontAwesomeIcon fontSize='large' icon={faShoppingCart} /></button>
            <button className={`${styles.nav_login_button} ${styles.active_large}`}>Log in</button>
            <button className={`${styles.nav_sign_up_button} ${styles.active_large}`}>Sign Up</button>
            <button className={`${styles.nav_language_button} ${styles.active_large}`}><img className={styles.world_grid_icon} src="./icons/earth-grid.png" alt='change language button' /></button>
          </div>
      </nav>
  )
}

export default NavBar