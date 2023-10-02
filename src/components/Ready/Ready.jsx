import React from 'react'
import './Ready.css'
import edit from '../../assets/edit.png'

function Ready() {
    return (
        <div className='Ready-container'>
            <h1 className='Ready-title'>
            Your video is ready!
            </h1>
            <div className='Ready-container-file-edit'>
                <h2 className='Ready-file-name'>
                Name
                </h2>
                <div className='Ready-container-file-input'>
                    <input className='Ready-file-input-box'
                           value='Untitled_Video_20232509'
                    />
                    
                    <img className='Ready-file-edit-icon' src={edit} alt='edit' /> 
                   
                </div>
            </div>
            <div className='Ready-email-container'>

            </div>
            <div className='Ready-container-Video_url'>
                <div className='Ready-video-name'>

                </div>
                <div className='Ready-file-link'>

                </div>
            </div>

        </div>
    )
}

export default Ready