import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div class="row">
                        <div class="heading-title text-center">
                            <h1 class="text-uppercase">Our services </h1>
                            <p class="p-top-30 half-txt">Departments </p>
                        </div>
                        </div>

            <div className='card-container'>
                <div className='card'>
                    <h3>- Academic -</h3>
                    <span className='bar'></span>
                    <img src='coding.jpg'/>
                    <span className='bar'></span>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <Link to='/contact' className='btn'>Contact</Link>
                </div>
                <div className='card'>
                    <h3>- Non-Academic -</h3>
                    <span className='bar'></span>
                    <img src='nonAC.jpg'/>
                    <span className='bar'></span>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <Link to='/contact' className='btn'>Contact</Link>
                </div>
                <div className='card'>
                    <h3>- Career Counselling -</h3>
                    <span className='bar'></span>
                    <img src='CC.jpg'/>
                    <span className='bar'></span>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <Link to='/contact' className='btn'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
