import React, { useState , useEffect} from 'react'
import PerformanceProgressBar from './PerformanceProgressBar'

import { useRecoilValue } from 'recoil'
import { fetchedApiData } from '../../store/selectors/apiData'

const OnPageScore = () => {

  const _fetchedApiData = useRecoilValue(fetchedApiData);
  const pageScore = _fetchedApiData.tasks[0].result[0].items[0].onpage_score;
  const [initialPageScore, setInitialPageScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialPageScore((prevScore) => {
        if (prevScore >= pageScore) {
          clearInterval(interval);
          return prevScore; // No change
        }
        return prevScore + 1; // Increment the score
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
    <div>
      <div>
        <PerformanceProgressBar score={pageScore} title={"On Page Score"} className={"w-32 h-32 bg-blue-100"} />
      </div>
      <div className='flex justify-center items-center'>
        <PerformanceProgressBar score={90} title={"Performance"} className={"w-28 h-28 bg-blue-100"} />
        <PerformanceProgressBar score={90} title={"Accessibility"} className={"w-28 h-28 bg-blue-100"} />
        <PerformanceProgressBar score={96} title={"SEO"} className={"w-28 h-28 bg-blue-100"} />
        <PerformanceProgressBar score={100} title={"Best Practices"} className={"w-28 h-28 bg-blue-100"} />
      </div>

      <div className='bg-blue-200 w-full rounded-full overflow-hidden mt-5 text-white font-semibold'>
        <p className={`bg-primary-color py-1 px-3 text-center`} style={{width: `${initialPageScore}%`, }}>{initialPageScore}</p>
      </div>
    </div>
  )
}


export default OnPageScore