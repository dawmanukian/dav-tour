import React from 'react'
import './header.css'
import DropMenu from '../drop-menu/DropMenu'

const Header = () => {
  return (
    <header>
        <div className='container header-data'>
            <div className='header-logo'>
                <h2>Dav Tour</h2>
            </div>
            <div className='header-links'>
                <nav>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>About</a>
                    <a href="#" className='nav-link'>Contact</a>
                </nav>
                <button className='tours-button'>Our tours</button>
                {['top'].map((placement, idx) => (
                    <DropMenu key={idx} placement={placement} name={placement} />
                ))}
            </div>
        </div>
    </header>
  )
}

export default Header