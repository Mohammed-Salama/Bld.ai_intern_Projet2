import React from 'react'
import styles from './NavBarStyle.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <>
      <nav>
          <div  className={styles.nav_bar}>
              <img className={styles.nav_logo} src="./imgs/udemy_logo.svg" alt="udemy logo"/> 
              <button className={styles.nav_button}>Categories</button>
              <form className={styles.search_form}>
                  <input className={styles.search_input} placeholder="&#xF002; Search for anything" type="search"/>
                  <input className={styles.nav_button} type="submit" value="Search"/>
              </form>
              <button className={styles.nav_button}>Udemy Business</button>
              <button className={styles.nav_button}>Teach on Udemy</button>
              <button className={styles.nav_button}><FontAwesomeIcon fontSize='large' icon={faShoppingCart} /></button>
              <button className={styles.nav_login_button}>Log in</button>
              <button className={styles.nav_sign_up_button}>Sign Up</button>
              <button className={styles.nav_language_button}><img className={styles.world_grid_icon} src="./icons/earth-grid.png" alt='' /></button>
          </div>
      </nav>
    </>
  )
}

export default NavBar