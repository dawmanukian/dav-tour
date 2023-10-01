import React from 'react'
import './contactdata.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactData = () => {
    document.title = 'Dav Tour Agency - Contact'
  return (
    <div className='contact-data container'>
        <div className='contact-info'>
            <h1>CONTACT INFO</h1>
            <hr />
            <div>
                <h3>Address​</h3>
                <p>123 Fifth Avenue, NY 10160, New York, USA</p>
            </div>
            <div>
                <h3>Email Us​</h3>
                <p>contact@example.com</p>
            </div>
            <div>
                <h3>Call Us​</h3>
                <p>800-123-456</p>
            </div>
            <div>
                <h3>Follow Us​</h3>
                <div className='contact-social-links'>
                    <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaFacebookSquare /></a>
                    <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaInstagram /></a>
                    <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
                </div>
            </div>
        </div>
        <img src={'https://wallpapercave.com/wp/wp1988844.jpg'} />
    </div>
  )
}

export default ContactData