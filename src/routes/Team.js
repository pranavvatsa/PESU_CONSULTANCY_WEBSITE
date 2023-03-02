import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TeamMembers from '../components/Team'

const Team = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TEAM' text='Check out our team' />
            <TeamMembers />
            
        </div>
    )
}

export default Team
