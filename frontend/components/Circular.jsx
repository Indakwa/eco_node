import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => (
  <div style={{ width: '45%', margin: '0 auto' }} className='circular'>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textColor: '#ececec',
        pathColor: '#67cc4a',
        trailColor: 'rgba(255, 255, 255, 0.15)',
      })}
    />
  </div>
);

export default CircularProgressBar;
