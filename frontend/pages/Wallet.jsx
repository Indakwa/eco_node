import React from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import { Link } from 'react-router-dom';
import { CgArrowTopRight } from "react-icons/cg";

const Wallet = () => {
  return (
    <section className='wallet'>
        <Header />

        <div className="wallet-container">
            <div className="top">
                <div className="left">
                    <h3>My Wallet</h3>
                    <button className='btns'>Deposit</button>
                    <button className='btns btn2'>Withdraw</button>
                </div>
                <div className="right">
                    <div className="card">
                        <div className="top-txt">
                            <p>Carbon Credits Balance</p>
                            <Link to="/dash" className='CTA'>See Stats <CgArrowTopRight className='icon'/></Link>
                        </div>
                        <p className="bottom-txt">
                            144
                        </p>
                    </div>

                    <div className="card">
                        <div className="top-txt">
                            <p>ICP Tokens Balance</p>
                            <Link to="/dash" className='CTA'>See Stats <CgArrowTopRight className='icon'/></Link>
                        </div>
                        <p className="bottom-txt">
                            208
                        </p>
                    </div>
                </div>
            </div>

            <div className="tableDiv">
                <h4>Transaction History</h4>
                <Table />
            </div>
        </div>
    </section>
  )
}

export default Wallet