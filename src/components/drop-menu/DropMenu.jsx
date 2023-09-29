import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

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
                <Offcanvas.Title>Dav Tour Agency</Offcanvas.Title>
                <button onClick={handleClose} className='offcanvas-close'><FaXmark /></button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav className='offcanvas-nav'>
                    <div className='nav-link-div'><a href="#" className='offcanvas-nav-link'>Home</a></div>
                    <div className='nav-link-div'><a href="#" className='offcanvas-nav-link'>About</a></div>
                    <div className='nav-link-div'><a href="#" className='offcanvas-nav-link'>Contact</a></div>
                    <div className='nav-link-div'><a href="#" className='offcanvas-nav-link'>Our tours</a></div>
                </nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default DropMenu