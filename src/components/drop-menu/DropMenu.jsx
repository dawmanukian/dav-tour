import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const DropMenu = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <button onClick={handleShow} className='drop-menu'>
            <FaBars />
        </button>

        <Offcanvas show={show} onHide={handleClose} {...props} id="drop-menu">
            <Offcanvas.Header>
                <h2>Dav Tour Agency</h2>
                <button onClick={handleClose} className='offcanvas-close'><FaXmark /></button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav className='offcanvas-nav'>
                    <div className='nav-link-div'><Link to={'/'} className='offcanvas-nav-link'>Home</Link></div>
                    <div className='nav-link-div'><Link to={'/about'} className='offcanvas-nav-link'>About</Link></div>
                    <div className='nav-link-div'><Link to={'/contact'} className='offcanvas-nav-link'>Contact</Link></div>
                    <div className='nav-link-div'><Link to={'/tours'} className='offcanvas-nav-link'>Our tours</Link></div>
                </nav>
                <div className='contact-links'>
                    <a href="tel:+37494673735">+374 94 67 37 35</a>
                    <a href="mailto: magicalcompanyofficial@gmail.com">magicalcompanyofficial@gmail.com</a>
                </div>
                <div className='social-links'>
                    <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaFacebookSquare /></a>
                    <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaInstagram /></a>
                    <a href='https://www.instagram.com/davv_tourr/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default DropMenu