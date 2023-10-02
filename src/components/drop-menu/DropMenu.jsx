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
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default DropMenu