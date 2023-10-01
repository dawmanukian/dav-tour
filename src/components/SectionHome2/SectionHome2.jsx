import React from 'react'
import './SectionHome2.css'
import { BsArrowRight } from 'react-icons/bs';

const SectionHome2 = () => {
    const data = [
        {
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg',
            title: 'Everest Camp Trek',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis'
        },
        {
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/walking-v1.jpg',
            title: 'Everest Camp Trek2',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis2'
        },
        {
            img: 'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg',
            title: 'Everest Camp Trek3',
            description : 'Fuerat aestu carentem habentia spectent tonitrua mutastis3'
<<<<<<< HEAD
        }
=======
        },
>>>>>>> 0575a94e17d9cd25c748025695db1a4f86547fc6
    ]
  return (
    <div className='sec-home2'>
        <h1>UPCOMING EVENTS</h1>
        <hr />
        <div className='home-cards'>
<<<<<<< HEAD

=======
>>>>>>> 0575a94e17d9cd25c748025695db1a4f86547fc6
            {data.map((item,index)=>(
            <div key={index} className='card'>
                <img src={item.img}/>
                <b>{item.title}</b>
                <p>{item.description}</p>
<<<<<<< HEAD

                <button>Learn More <BsArrowRight /> </button>
            </div>
            ))}

    
            
=======
                <button>Learn More <BsArrowRight /> </button>
            </div>
            ))}
>>>>>>> 0575a94e17d9cd25c748025695db1a4f86547fc6
        </div>
    </div>
  )
}

export default SectionHome2