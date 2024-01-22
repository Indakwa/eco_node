// VideoBackground.js
import React from 'react';
import heroVid from '../assets/vids/4.mp4'
import Header from './Header';
import MobNav from './MobNav';
import { Link } from 'react-router-dom';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video muted>
        <source src={heroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Add other content on top of the video if needed */}
      <div className="content">
        <Header />
        <MobNav />

        <div className="inner-content">
            <h1>Eco-Node</h1>
            <p className='txt'>
                Empowering you to take control of your carbon footprint. Eco-Node rewards your eco-friendly choices with Climate Action Tokens. Explore a platform where environmental impact meets tangible benefits. Start earning tokens for a better tomorrow.
            </p>
            <Link to="/how" className='CTA'>How it works</Link>
            <Link to="/register" className='CTA btn2'>Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
