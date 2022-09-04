import React from 'react'
import HomePageSecondContainer from './HomePageSecondContainer.js'
import WelcomeTextAndAlert from './WelcomeTextAndAlert.js'
import {Link} from 'react-router-dom'
function HomePage() {
  return (
    <>
        <WelcomeTextAndAlert />
        <Link to="/courses/50"><button>lol </button></Link>
        <HomePageSecondContainer/>
    </>
  )
}

export default HomePage