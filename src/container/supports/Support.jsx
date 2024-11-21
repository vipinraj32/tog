import React from 'react'
import './support.css'
import  chainlink from '../../assets/chainlink.png'
import ecosystem from '../../assets/ecosystem.png'
import solana from '../../assets/solana.png'
import devfolio from '../../assets/devfolio.png'
import  ethereum from '../../assets/ethreum.png'
import devcon from '../../assets/devcon.png'
import biconomy from '../../assets/biconomy.png'
const Support = () => {
  return (
    <div>
    <div className='section__margin support'> 
        
        <h1 className='support_h1'>Our Supporters</h1>
    </div>
        <div className="scroll">
        <div className="container">
            <img src={chainlink} alt="chainlink"/>
        </div>
        <div className="container">
            <img src={solana} alt="ecpsystem"/>
        </div>
        <div className="container">
            <img src={ethereum} alt=""/>
        </div>
        <div className="container ">
            <img src={ecosystem} alt=""/>
        </div>
        <div className="container ">
            <img src={devfolio} alt=""/>
        </div>
      
        <div className=" container">        
            <img src={devcon} alt=""/>
        </div>
        <div className=" container">        
            <img src={biconomy} alt=""/>
        </div>

       
    </div>
    <div className='section__margin'>
    <h1 className='support_h1'>Upcoming Event 2024</h1>
    <p className='upcoming'>UpComing....</p>
    </div>
   
   </div>
  )
}

export default Support
