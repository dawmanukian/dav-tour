import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

const TourCard = ({item, index}) => {
  return (
    <div key={index} className='card'>
        <img src={item.img}/>
        <b>{item.title}</b>
        <p>{item.description}</p>
        <button>Learn More <BsArrowRight /> </button>
    </div>
  )
}

export default TourCard