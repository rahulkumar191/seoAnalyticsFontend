import React from 'react'

const SpeedInsightsBox = ({ data }) => {
    return (
        <div className='text-center px-3 py-5 border rounded-md shadow-md shadow-gray-400 '>
            <p className='text-lg font-semibold'>{Math.floor(data.value)}</p>
            <p>{data.label}</p>
        </div>
    )
}

export default SpeedInsightsBox