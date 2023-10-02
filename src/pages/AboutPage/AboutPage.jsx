import React from 'react'
import SectionContact from '../../components/SectionContact/SectionContact'
import SectionAbout from '../../components/SectionAbout/SectionAbout'

const AboutPage = () => {

  document.title = 'Dav Tour Agency - About';

  return (
    <>
        <SectionContact header={'About us'}/>
        <SectionAbout />
    </>
  )
}

export default AboutPage