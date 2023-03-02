import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>PESU CONSULTANCY</h1>
                <p>Student run consultancy club</p>
                <div>
                    <Link to='/team' className='btn'>Team</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
