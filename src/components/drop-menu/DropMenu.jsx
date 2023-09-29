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

        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header>
                <Offcanvas.Title>Dav Tour</Offcanvas.Title>
                <button onClick={handleClose} className='offcanvas-close'><FaXmark /></button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav className='offcanvas-nav'>
                    <a href="#" className='offcanvas-nav-link'>Home</a>
                    <a href="#" className='offcanvas-nav-link'>About</a>
                    <a href="#" className='offcanvas-nav-link'>Contact</a>
                </nav>
                <button className='tours-button'>Our tours</button>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default DropMenu