import React from 'react'
import Header from '../components/Header'
import logVid from '../assets/vids/1.mp4'
import MobNav from '../components/MobNav';

const How = () => {
  return (
    <section className="how-section">
        <Header />
        <MobNav />

        <div className="inner-how">

            <div className="how-video">
                <video autoPlay loop  muted>
                    <source src={logVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="how-txt">
                <h6>1. Sign Up</h6>
                <p>
                    Get started by creating an account on Eco-Node. Simply click on the "Sign Up" button and fill in your basic details. This will create your account and set you on the path to earning Climate Action Tokens.
                </p>

                <h6>2. Explore Actions</h6>
                <p>
                    Once registered, explore the variety of eco-friendly actions available on the platform. These actions range from reducing energy consumption to participating in community challenges. Each action comes with associated token rewards, providing a clear incentive for your sustainable choices.
                </p>

                <h6>3. Track Your Carbon Footprint</h6>
                <p>
                    Measure your environmental impact by tracking your carbon footprint. Use our intuitive tools to input basic data and discover ways to reduce your carbon emissions. The more actions you complete, the more tokens you earn
                </p>

                <h6>4. Earn Climate Action Tokens</h6>
                <p>
                    As you complete eco-friendly actions and contribute to community challenges, you'll accumulate Climate Action Tokens in your wallet. These tokens represent your positive contributions to a sustainable future.
                </p>
            </div>
        </div>
    </section>
  )
}

export default How