import React from 'react'

const PrimaryButton = ({onClick}) => {

    return (
        <div>
            <button
                type='submit'
                onClick={onClick}
                className='bg-primary-color text-ternary-color font-semibold px-5 py-2 rounded-sm'
            >Submit</button>
        </div>
    )
}

export default PrimaryButton