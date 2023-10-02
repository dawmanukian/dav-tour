import React from 'react'
import SectionHome1 from '../../components/SectionHome1/SectionHome1'
import SectionHome2 from '../../components/SectionHome2/SectionHome2'
import SectionHome3 from '../../components/SectionHome3/SectionHome3';
import SectionHome4 from '../../components/SectionHome4/SectionHome4';
const HomePage = () => {
  document.title = 'Dav Tour Agency - Home';
  return (
    <div>

        <SectionHome1 />

        <SectionHome2 /> 

        <SectionHome3 />

      <SectionHome4/>

    </div>
  )
}

export default HomePage