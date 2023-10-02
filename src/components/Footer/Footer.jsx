import React from 'react'
import Home from '../../assets/icon.png'
import "./Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div className='container'>
            <div className='icons'>
                <div className='icon-container'>
                    <div >
                        <img className='home-icon' src={Home} alt='home' />                </div>
                    <div className='footer-icon-text'>
                        HelpMeOut
                    </div>
                </div>
            </div>
            <div className='menu-nav-header'>
                <div className='menu-nav-header'>
                Menu
                </div>
                <div className='menu-nav-item'>
                Home
                </div>
                <div className='menu-nav-item'>
                Converter
                </div>
                <div className='menu-nav-item'>
                How it Works
                </div>
            </div>
            <div className='about-nav'>
                <div className='menu-nav-header'>
                About us
                </div>
                <div className='menu-nav-item'>
                About
                </div>
                <div className='menu-nav-item'>
                Contact Us
                </div>
                <div className='menu-nav-item'>
                Privacy Policy
                </div>
            </div>
            <div className='screen-record-nav'>
                <div className='menu-nav-header'>
                Screen Record
                </div>
                <div className='menu-nav-item'>
                Browser Window
                </div>
                <div className='menu-nav-item'>
                Desktop
                </div>
                <div className='menu-nav-item'>
                Application
                </div>
            </div>

            </div>
        </footer>
    )
}

export default Footer