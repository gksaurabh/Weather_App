import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons"

function TemperatureAndDetails() {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300 font-light">
            <p>Cloudy</p>
        </div>

        <div className="flex flex-row items-center justify-around text-white py-3">
            <img src="https://www.vhv.rs/dpng/d/593-5932271_icon-weather-png-free-sun-clip-art-png.png" 
                 alt=""
                 className="w-20"
            />
            <p className="text-5xl">34°</p>
            <div className="flex flex-col space-y-2">

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1" />
                    Feels Like: 
                    <span className="font-medium ml-1"> 32°</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1" />
                    Humidity: 
                    <span className="font-medium ml-1"> 65%</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1" />
                    Wind: 
                    <span className="font-medium ml-1"> 10 km/hr</span>
                </div>

            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            
            <UilSun />
            <p className='font-light'>Rise: 05:47 AM </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>Set: 8:17 PM </p>
            <p className='font-light'>|</p>

            <UilArrowUp />
            <p className='font-light'>High: 05:47 AM </p>
            <p className='font-light'>|</p>

            <UilArrowDown />
            <p className='font-light'>Low: 05:47 AM </p>
            <p className='font-light'>|</p>

            

        </div>
    </div>
    )
}

export default TemperatureAndDetails