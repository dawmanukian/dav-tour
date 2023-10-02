import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div>          
          <h5>Address: Sevan, Armenia | Phone: 800-123-456 | Email: davtour@gmail.com</h5>
        </div>
        <b>Copyright © 2023 Dav Tour Agency</b>
        <div className="footer-social-links">
            <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaFacebookSquare /></a>
            <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaInstagram /></a>
            <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        </div>
        <div>
          <p className='magical'>Created by <a href='#' target='_blank' rel='noreferrer' className='magical-site'>Magical Company</a></p>
        </div>
    </footer>
  )
}

export default Footer