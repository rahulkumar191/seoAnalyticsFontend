import React, { useState } from 'react'

import { useRecoilValue } from 'recoil';
import { fetchedApiData } from '../store/selectors/apiData';

const SocialMedia = () => {
    const _fetchedApiData = useRecoilValue(fetchedApiData);
    const social_media_tags = getSocialMedeaMeta(_fetchedApiData);

    return (
        <div>
            {
                social_media_tags &&
                <div>
                    <h2 className='text-2xl md:text-3xl font-semibold text-center mb-5 text-primary-color'>Social Media Meta Tags Test</h2>
                    <div className='mx-5 mb-10 bg-gray-100 border-[1px] border-gray-300 rounded-md px-5 py-3 md:flex justify-center items-center gap-5'>
                        <div>
                            {
                                social_media_tags.map((data, index) => {
                                    return (
                                        <div key={index} className='py-2 flex border-b-[1px] border-gray-400'>
                                            <p className='basis-[120px] shrink-0 '>{data.label}</p>
                                            <p className='font-semibold text-justify break-all'>{data.value}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='my-5 rounded-lg overflow-hidden'>
                            <img src={`${social_media_tags[3].value}`} alt="" />
                            <div className='bg-gray-300 px-3 py-2'>
                                <p className='font-semibold text-lg'>{social_media_tags[0].value}</p>
                                <p className=''>{social_media_tags[1].value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const getSocialMedeaMeta = (seoData) => {
    const data = seoData.tasks[0].result[0].items[0].meta.social_media_tags;
    if (!data) {
        return false;
    }
    const actualData = [
        { label: "og:title", value: data['og:title'] },
        { label: "og:description", value: data['og:description'] },
        { label: "og:type", value: data['og:type'] },
        { label: "og:image", value: data['og:image'] },
        { label: "twitter:card", value: data['twitter:card'] },
        { label: "twitter:site", value: data['twitter:site'] },
        { label: "twitter:creator", value: data['twitter:creator'] },
    ]
    return actualData;
}

export default SocialMedia