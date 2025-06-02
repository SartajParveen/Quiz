import React from 'react'

import "./LandingPage.css"
import { useNavigate } from 'react-router-dom'
// import backgroundImage from '../Components/Assets/LandingPage.jpg'


const LandingPage = () => {
    const navigate = new useNavigate()
    const onchange=()=>{
        navigate('/popular')
        // alert("quiz starting soon")
    }
  return (
    <div className='landingPage'>
      <button onClick={onchange} className='startBtn'>Let's Go!</button>
      
    </div>
  )
}

export default LandingPage
