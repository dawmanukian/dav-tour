import React from 'react'
import './SectionHome1.css'
import { Link } from 'react-router-dom'

const SectionHome1 = () => {
  return (
    <div className='home-sect1-div'>
      <div>
        <b>Explore the Colourful World</b>
        <hr />
        <h1>A WONDERFUL GIFT</h1>
        <Link to={'/about'}>
          <button className='learn-more-button'>LEARN MORE</button>
        </Link>
      </div>
    </div>
  )
}

export default SectionHome1