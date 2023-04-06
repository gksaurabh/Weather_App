import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                Thursday, April 6 2023| Local Time:  11:49 PM
            </p>
        </div>

        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">
                Ottawa, ON, Canada
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation