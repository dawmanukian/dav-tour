import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './tourcard.css'

const TourCard = ({item}) => {
  return (
    <Link to={`/tour/${item.id}`} className='card-link'>    
        <div key={item.id} className='card'>
            <img src={item.img}/>
            <b>{item.title}</b>
            <p>{item.description}</p>
            <button>Learn More <BsArrowRight /> </button>
        </div>
    </Link>
  )
}

export default TourCard