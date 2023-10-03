import React from 'react'
import './tourinfo.css'

const TourInfo = ({data}) => {
  return (
    <div className='container tour'>
        {
            data.map(el => {
                return (
                    <div className='tour-info'>
                        <h1>{el.title}</h1>
                        <img src={el.img}/>
                        <p>{el.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TourInfo