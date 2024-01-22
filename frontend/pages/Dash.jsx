import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { CgArrowTopRight } from "react-icons/cg";
import Chart from '../components/Chart'
import Circular from '../components/Circular'

const Dash = () => {
    const goalProgress = 60;

  return (
    <section className='dash'>
        <Header />

        <div className="dash-container">
            <h2>Dashboard Overview</h2>
            <div className="top-cards">
                <div className="card">
                    <div className="top-txt">
                        <p>Carbon Credits Balance</p>
                        <Link to="/dash" className='CTA'>View All <CgArrowTopRight className='icon'/></Link>
                    </div>
                    <p className="bottom-txt">
                        144
                    </p>
                </div>
                
                <div className="card">
                    <div className="top-txt">
                        <p>Current Carbon Footprint</p>
                        <Link to="/dash" className='CTA'>View All <CgArrowTopRight className='icon'/></Link>
                    </div>
                    <p className="bottom-txt">
                        242
                    </p>
                </div>

                <div className="card">
                    <div className="top-txt">
                        <p>Carbon Offsetting Projects</p>
                        <Link to="/dash" className='CTA'>View All <CgArrowTopRight className='icon'/></Link>
                    </div>
                    <p className="bottom-txt">
                        22
                    </p>
                </div>

            </div>

            <div className="mid">
                <div className="left-chart">
                    <Chart />
                </div>

                <div className="right-chart">
                    <Circular percentage={goalProgress}/>
                    <h5>Community Challenge Projects</h5>
                    <p>2401+ Global participants</p>
                    <p id='complete'>{goalProgress}% Complete</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dash