import React from 'react'

const TourInfo = ({data}) => {
  return (
    <div className='tour-info'>
        {
            data.map(el => {
                return (
                    <div>
                        <h1>{el.title}</h1>
                        <img src={el.img} width={'80%'}/>
                        <p>{el.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TourInfo