import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Team'

const Team = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TEAM' text='Check out our team' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Team
