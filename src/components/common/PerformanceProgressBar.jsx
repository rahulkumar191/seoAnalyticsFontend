import React, { useEffect, useState } from 'react'
import classNames from "classnames";
import './PerformanceProgressBar.css';

const PerformanceProgressBar = ({ score, title, d, className }) => {

  const [initialScore, setInitialScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialScore((prevScore) => {
        if (prevScore >= score) {
          clearInterval(interval);
          return prevScore; // No change
        }
        return prevScore + 1; // Increment the score
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [score]);

  return (
    <div className={`p-2 flex justify-center items-center flex-col gap-1 `}>
      <p
        className={classNames(" rounded-full flex justify-center items-center border-[8px] border-primary-color text-3xl font-bold", className)}
      >{initialScore}%</p>
      <p>{title}</p>
    </div>
  )
}

export default PerformanceProgressBar