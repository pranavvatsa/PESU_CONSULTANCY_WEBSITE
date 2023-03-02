import React from 'react'
import './FormStyles.css'
import { useState }  from 'react'



const Form = () => {
    
    
    return (
        <div className='form'>
            <form method='POST' action='http://localhost:4000/staff'>
            <label>Your Name</label>
                <input required name="firstName"></input>
                <label>Email</label>
                <input required name="Email"></input>
                <label>SRN</label>
                <input required name="SRN"></input>
                <label>Query</label>
                <input required name="Package"></input>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

/*<input required onChange={nameUpdate}></input>
<label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>SRN</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='5' placeholder='Type a short message here' />*/ 

export default Form

