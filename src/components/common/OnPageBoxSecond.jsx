import React from 'react'

const OnPageBox_2 = ({data}) => {
  return (
    <div className='flex justify-center items-center gap-5 px-3 py-5 border rounded-md shadow-md'>
        <p className='text-2xl'>{!data.value ? <i className="fa-solid fa-circle-check text-green-500"></i> : <i className="fa-solid fa-circle-xmark text-red-500"></i>}</p>
        <div>
            <p className='text-lg font-semibold'>{data.label}</p>
            <p className='text-gray-500'>{data.description}</p>
        </div>
    </div>
  )
}

export default OnPageBox_2