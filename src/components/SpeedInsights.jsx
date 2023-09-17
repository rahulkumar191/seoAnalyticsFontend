import React from 'react'
import SpeedInsightsBox from './common/SpeedInsightsBox'

import { useRecoilValue } from 'recoil';
import { fetchedApiData } from '../store/selectors/apiData';

const SpeedInsights = () => {
    const _fetchedApiData = useRecoilValue(fetchedApiData);
    const speedInsights = getSpeedInsights(_fetchedApiData);

    return (
        <div>
            <h2 className='text-2xl md:text-3xl font-semibold text-center mb-5 text-primary-color'>Speed Insights</h2>
            <div className='px-5 mb-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {
                    speedInsights.map((data, index) => <SpeedInsightsBox key={index} data={data} />)
                }
            </div>
        </div>
    )
}

const getSpeedInsights = (data) => {
    const pageTiming = data.tasks[0].result[0].items[0].page_timing;
    const actualData = [
        { label: "Time to Secure Connection", value: pageTiming.time_to_secure_connection },
        { label: "Waiting Time", value: pageTiming.waiting_time },
        { label: "Download Time", value: pageTiming.download_time },
        { label: "Time to Interactive", value: pageTiming.time_to_interactive },
        { label: "DOM Complete", value: pageTiming.dom_complete },
        { label: "Largest Contentful Paint", value: pageTiming.largest_contentful_paint },
    ]
    return actualData;
}

export default SpeedInsights