import React from 'react'
import './SectionHome2.css'
import { BsArrowRight } from 'react-icons/bs';
import TourCard from '../tourcard/TourCard';

const SectionHome2 = () => {
    const data = [
        {
            id: 1,
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg',
            title: 'Everest Camp Trek',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis'
        },
        {
            id: 2,
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/walking-v1.jpg',
            title: 'Everest Camp Trek2',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis2'
        },
        {
            id: 3,
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg',
            title: 'Everest Camp Trek3',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis3'

        }
    ]
  return (
    <div className='sec-home2'>
        <h1>UPCOMING EVENTS</h1>
        <hr />
        <div className='home-cards'>
            {data.map((item)=>(
                <TourCard item={item} />
            ))}
        </div>
    </div>
  )
}

export default SectionHome2