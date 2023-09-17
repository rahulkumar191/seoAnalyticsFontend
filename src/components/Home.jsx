import React, { useState } from 'react'
import PrimaryButton from './common/PrimaryButton'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigateTo = useNavigate();
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlPattern = /^(https?:\/\/)?([\w.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
        if (urlPattern.test(url)) {
            navigateTo('/scanner', { state: url })
        }
        else {
            alert("Invalid URL");
        }
    }

    return (
        <div>
            <h1 className='bg-primary-color text-ternary-color font-semibold text-2xl px-5 py-3 rounded-md  w-fit my-5 mx-auto ' >Obtain SEO Audit Report</h1>

            <form onSubmit={handleSubmit}>
                <div className='bg-red m-5 p-2 flex gap-3 justify-center items-center flex-col sm:flex-row '>
                    <input type="text"
                        placeholder='Website URL'
                        value={url}
                        className='border-2 border-secondary-color px-3 py-2 rounded-md'
                        onChange={(e) => { setUrl(e.target.value) }}
                    />

                    <PrimaryButton/>
                </div>
            </form>
        </div>
    )
}

export default Home