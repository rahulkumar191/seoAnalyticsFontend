import React from 'react'

const Spinner = () => {
    return (
        <div className='relative w-full h-screen flex justify-center items-center'>
            <div
            className=' inline-block w-24 h-24 rounded-full border-[3px] border-primary-color border-t-0 box-border animate-spin '
            ></div>
        </div>
    )
}

export default Spinner