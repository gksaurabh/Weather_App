import React, { useState } from 'react'
import { UilLocationPoint,UilSearch } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';


function Inputs({setQuery, units, setUnits}) {
    const[city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") setQuery({q: city});
    };

    const handleLocationClick = () => {
        if(navigator.geolocation) {
            toast.info('Fetching Users Loation')
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success('Location Fetched!')
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                
                setQuery({lat,lon})
            })
            
        };
    };

    const handleUnitClick = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w3/4 items-center justify-center space-x-4">
            <input 
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type="text" 
                placeholder='search for city...'
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            />
            <UilSearch 
                size={25} 
                className="text-white cursor-point transition ease-out hover:scale-125" 
                onClick={handleSearchClick}
            />
            <UilLocationPoint 
                size={25} 
                className="text-white cursor-point transition ease-out hover:scale-125" 
                onClick={handleLocationClick}
            />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button 
                name="metric" 
                className="text-xl text-white font-light transition ease-out hover:scale-125" 
                onClick={handleUnitClick}>°C
            </button>

            <p className="text-xl text-white font-light mx-1">/</p>

            <button 
                name="imperial" 
                className="text-xl text-white font-light transition ease-out hover:scale-125" 
                onClick={handleUnitClick}>°F
            </button>
        </div>

    </div>
  )
}

export default Inputs;