import React from 'react'
import SectionContact from '../../components/SectionContact/SectionContact'
import ContactData from '../../components/ContactData/ContactData'

const ContactPage = () => {

  document.title = 'Dav Tour Agency - Contact';

  return (
    <div>
        <SectionContact header={'Contact us'}/>
        <ContactData/>
    </div>
  )
}

export default ContactPage