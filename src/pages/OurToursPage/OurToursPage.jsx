import React from 'react'
import SectionContact from '../../components/SectionContact/SectionContact'
import AllTours from '../../components/alltours/AllTours'

const OurToursPage = () => {

    document.title = 'Dav Tour Agency - Tours';

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
  return (
    <>
        <SectionContact header = {'Our Tours'}/>
        <AllTours data={data}/>
    </>
  )
}

export default OurToursPage