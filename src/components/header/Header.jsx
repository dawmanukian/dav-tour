import React from 'react'
import './header.css'
import DropMenu from '../drop-menu/DropMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='container header-data'>
            <div className='header-logo'>
                <Link to={'/'} className='header-logo-link'>
                    <h2>Dav Tour Agency</h2>
                </Link>
            </div>
            <div className='header-links'>
                <nav>
                    <Link to={'/'} className='nav-link'>Home</Link>
                    <Link to={'/about'} className='nav-link'>About</Link>
                    <Link to={'/contact'} className='nav-link'>Contact</Link>
                </nav>
                <Link to={'/tours'}>
                    <button className='tours-button'>Our tours</button>
                </Link>
                {['top'].map((placement, idx) => (
                    <DropMenu key={idx} placement={placement} name={placement} />
                ))}
            </div>
        </div>
    </header>
  )
}

export default Header