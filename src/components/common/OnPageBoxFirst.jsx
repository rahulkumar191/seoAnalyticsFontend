import React from 'react'

const OnPageBox_1 = ({data}) => {
  return (
    <div className='text-center px-3 py-5 border rounded-md shadow-md text-lg font-semibold'>
        <p>{Math.floor(data.value)}</p>
        <p>{data.label}</p>
    </div>
  )
}

export default OnPageBox_1