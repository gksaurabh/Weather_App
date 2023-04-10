import React from 'react'
import logo from '../assets/logo.png'

function Banner() {
  return (
    <div className="flex items-center justify-left my-6">
        <img src={logo} className='w-10 my-1'alt="" />
        <p className="text-white text-2xl font-medium transition ease-out hover:scale-125">    WeatherMate</p>
    </div>
  )
}

export default Banner