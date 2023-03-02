import React from 'react'
import './TeamStyles.css'

import {Link} from 'react-router-dom'


const Team = () => {
    return (

        <div class="container">
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="pranav.jpeg"/>
                    </div>
                    <h3 class="title">Pranav Vatsa</h3>
                    <span class="post">Head-Technology Consulting</span>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="ranjana.jpeg"/>
                    </div>
                    <h3 class="title">Ranajana V</h3>
                    <span class="post">Head-Co Curicular Consulting</span>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="pradyun.jpeg"/>
                    </div>
                    <h3 class="title">Pradyun P Rao</h3>
                    <span class="post">Career Counselling Specialist</span>
                </div>
            </div>

                </div>
    )
}

export default Team
