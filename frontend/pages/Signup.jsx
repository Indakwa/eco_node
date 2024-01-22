import React from 'react'
import Header from '../components/Header'
import logVid from '../assets/vids/2.mp4'
import { useNavigate } from 'react-router-dom';
import MobNav from '../components/MobNav';

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
  
      navigate('/dash');
    };


  return (
    <section className="signup-section">
        <Header />
        <MobNav />

        <div className="inner-signup">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' required autoComplete='off'/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Enter your email'  required autoComplete='off'/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='Enter your password'  required autoComplete='off'/>

                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" id="password2" name="password" placeholder='Confirm your password'  required autoComplete='off'/>

                    <button type="submit" className='submit'>Sign Up</button>
                </form>
            </div>

            <div className="signup-video">
                <video autoPlay loop  muted>
                    <source src={logVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>
  )
}

export default Signup