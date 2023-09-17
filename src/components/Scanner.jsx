import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../api/index'
import './Scanner.css'
import Spinner from './common/Spinner';

import OnPageScore from './common/OnPageScore';
import OnPageResult from './OnPageResult';
import HTags from './HTags';
import SpeedInsights from './SpeedInsights';
import SocialMedia from './SocialMedia';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { apiDataState } from '../store/atoms/apiData';
import { isDataLoading, isScanning, screenShot} from '../store/selectors/apiData';

const Scanner = () => {
    const url = useLocation().state;

    const setApiData = useSetRecoilState(apiDataState);

    const _isDataLoading = useRecoilValue(isDataLoading);
    const _isScanning = useRecoilValue(isScanning);
    const _screenShot = useRecoilValue(screenShot);

    useEffect(() => {
        const getApiData = async (url) => {
            const bodyData = [
                {
                    "url": url,
                    "render_js": "true",
                    "load_resources": "true",
                    "load_js": "true"
                }
            ];

            const fetched_srceenshot = (await api.post('page_screenshot', [{ "url": url, "full_page_screenshot": false }],
                {
                    auth: {
                        username: 'malyavikash65@gmail.com',
                        password: 'd966ca28c468f730'
                    }
                }
            )).data.tasks[0].result[0].items[0].image;

            // console.log(fetched_srceenshot);
            setApiData(apiData => ({
                ...apiData,
                screenShot: fetched_srceenshot,
                isLoading: false
            }));

            const fetchedApiData = (await api.post('instant_pages', bodyData,
                {
                    auth: {
                        username: 'malyavikash65@gmail.com',
                        password: 'd966ca28c468f730'
                    }
                }
            )).data;

            // console.log(fetchedApiData.tasks[0].result);

            setApiData(apiData => ({
                ...apiData,
                fetchedApiData: fetchedApiData,
                isScanning: false
            })) 
        }

        getApiData(url);

    }, [])


    return (
        <div className='relative'>
            {
                (_isDataLoading) ?
                <Spinner /> :

                <div>
                    <div className='text-center py-7'>
                        <p className='text-sm text-gray-500'>EVERYTHING YOU NEED TO KNOW</p>
                        <p className='text-4xl'>{url}</p>
                    </div>

                    <div className='md:flex gap-5 p-10 '>
                        <div className='flex-1'>
                            <div className='flex justify-between items-center px-3 bg-black text-white rounded-t-md'>
                                <div className='text-5xl font-bold'><i className="fa-solid fa-ellipsis"></i></div>
                                <div>Export to PDF</div>
                            </div>
                            <img src={`${_screenShot}`} alt="home page" />

                            <div
                                className={`bg-primary-color ${_isScanning ? 'scanner-line' : null}`}
                            ><span></span></div>
                        </div>

                        {
                            !_isScanning &&
                            <div className='flex-1'>
                                <OnPageScore />
                            </div>
                        }

                    </div>

                    <div>
                        {
                            !_isScanning && 
                            <div>
                                <OnPageResult/>
                                <HTags/>
                                <SpeedInsights/>
                                <SocialMedia/>
                            </div>
                        }
                    </div>
                </div>
            }

        </div>
    )
}


export default Scanner