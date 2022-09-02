import React from 'react'
import CardsSection from './CardsSection'
function HomePage(props) {
  return (
    <CardsSection data={props.data}/>
  )
}

export default HomePage