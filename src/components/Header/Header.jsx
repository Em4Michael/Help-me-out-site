import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import Home from '../../assets/iCON 7 1.png'
function Header() {
    return (
        <header>
            <div className='header-container'>
            <Link to="/" >    <div className='icon-container'>
                    <div >
                        <img className='home-icon' src={Home} alt='home' />                </div>
                    <div className='icon-text'>
                        HelpMeOut
                    </div>
                </div> </Link>  
                <div className='center-header'>
                    <div>
                        Features
                    </div>
                    <div>
                        How It Works
                    </div>
                </div>
                <div>
                    <div className='action'>
                        Get Started
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header