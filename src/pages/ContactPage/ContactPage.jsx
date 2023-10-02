import React from 'react'
import SectionContact from '../../components/SectionContact/SectionContact'
import ContactData from '../../components/ContactData/ContactData'

const ContactPage = () => {
  return (
    <div>
        <SectionContact header={'Contact us'}/>
        <ContactData/>
    </div>
  )
}

export default ContactPage