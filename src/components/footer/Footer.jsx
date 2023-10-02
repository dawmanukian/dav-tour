import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <p>Address: Sevan, Armenia</p>
        <p>Phone: 800-123-456</p>
        <p>Email: davtour@gmail.com</p>
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