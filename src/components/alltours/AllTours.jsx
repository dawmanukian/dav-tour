import React from 'react'
import TourCard from '../tourcard/TourCard'
import './alltours.css'

const AllTours = ({data}) => {
  return (
    <div className='all-tours home-cards'>
        {data.map((item,index)=>(
            <TourCard item={item} index={index}/>
        ))}
    </div>
  )
}

export default AllTours