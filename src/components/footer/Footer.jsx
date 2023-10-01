import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <p>123 Fifth Avenue, NY 10160, New York, USA | Phone: 800-123-456 | Email: contact@example.com</p>
        <b>Copyright © 2023 Dav Tour Agency</b>
        <div className="footer-social-links">
            <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaFacebookSquare /></a>
            <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaInstagram /></a>
            <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        </div>
    </footer>
  )
}

export default Footer