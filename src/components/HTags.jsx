import React from 'react'

import { fetchedApiData } from '../store/selectors/apiData';
import { useRecoilValue } from 'recoil';

const HTags = () => {

    const _fetchedApiData = useRecoilValue(fetchedApiData);
    const HTags = findHTags(_fetchedApiData);

  return (
    <div className='mx-5 mb-10'>
        <h2 className='text-2xl md:text-3xl font-semibold text-center mb-5 text-primary-color'>H Tags</h2>

        <div className='grid md:grid-cols-2 gap-5'>
        {
            Object.keys(HTags).map((key, index) => {
                return(
                    <div key={index} className='bg-gray-100 px-5 py-3 rounded-md shadow-md border-[1px] border-gray-500'>
                        <h3 className='font-semibold mb-2'>{`We found #${HTags[key].length} ${key.toUpperCase()} tags on this page`}</h3>
                        <ol>
                            {
                                HTags[key].map((h, index) => {
                                    return(
                                        <li key={index}>{index+1}.{h}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

const findHTags = (data) => {
    let HTags = data.tasks[0].result[0].items[0].meta.htags;
    if(HTags === null) {
        console.log(HTags);
        HTags = {
            h1: [],
            h2: [],
            h3: [],
            h4: []
        };
    }
    return HTags;
}

export default HTags