import React from 'react'
import SectionContact from '../../components/SectionContact/SectionContact'
import { useParams } from 'react-router-dom'
import TourInfo from '../../components/tourinfo/TourInfo'

const TourInfoPage = () => {

    const tourId = useParams('tourId')

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

        },
        {
            id: 4,
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg',
            title: 'Everest Camp Trek',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis'
        },
        {
            id: 5,
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/walking-v1.jpg',
            title: 'Everest Camp Trek2',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis2'
        },
        {
            id: 6,
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg',
            title: 'Everest Camp Trek3',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis3'

        }
    ]

    const tour = data.filter(el => el.id === Number(tourId.tourId))

  return (
    <>
        <SectionContact header = {'Tour info'}/>
        <TourInfo data={tour}/>
    </>
  )
}

export default TourInfoPage