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
import { formatToLocalTime, iconUrl } from '../services/weatherService'

function TemperatureAndDetails({
    weather:{ 
        details, 
        icon, 
        temp, 
        temp_min, 
        temp_max, 
        sunrise, 
        sunset, 
        feels_like, 
        speed, 
        humidity, 
        timezone },
    }) {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300 font-light">
            <p>{details}</p>
        </div>

        <div className="flex flex-row items-center justify-around text-white py-3">
            <img src={iconUrl(icon)} 
                 alt=""
                 className="w-20"
            />
            <p className="text-5xl">{temp.toFixed()}°</p>
            <div className="flex flex-col space-y-2">

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1" />
                    Feels Like: 
                    <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1" />
                    Humidity: 
                    <span className="font-medium ml-1"> {humidity.toFixed()}%</span>
                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1" />
                    Wind: 
                    <span className="font-medium ml-1"> {speed.toFixed()} km/hr</span>
                </div>

            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            
            <UilSun />
            <p className='font-light'>Rise: {formatToLocalTime(sunrise, timezone,'hh:mm a')} </p>
            <p className='font-light'>|</p>

            <UilSun />
            <p className='font-light'>Set: {formatToLocalTime(sunset, timezone,'hh:mm a')} </p>
            <p className='font-light'>|</p>

            <UilArrowUp />
            <p className='font-light'>High:  {temp_max.toFixed()} </p>
            <p className='font-light'>|</p>

            <UilArrowDown />
            <p className='font-light'>Low:  {temp_min.toFixed()} </p>
            <p className='font-light'>|</p>

            

        </div>
    </div>
    )
}

export default TemperatureAndDetails