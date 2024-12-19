import React from 'react'
import './support.css'
import  chainlink from '../../assets/chainlink.png'
import solana from '../../assets/solana.png'
import devfolio from '../../assets/devfolio.png'

import biconomy from '../../assets/biconomy.png'
import  s1 from '../../assets/s1.JPG'
import  s2 from '../../assets/s2.JPG'
import  s3 from '../../assets/s3.JPG'
import  s4 from '../../assets/s4.JPG'
import  s5 from '../../assets/s5.JPG'
import  s6 from '../../assets/s6.png'
import  s7 from '../../assets/s7.JPG'




const Support = () => {
  return (
    <>
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
        {/* <div className="container">
            <img src={ethereum} alt=""/>
        </div> */}
       
        <div className="container ">
            <img src={devfolio} alt=""/>
        </div>
      
        <div className=" container">        
            <img src={biconomy} alt=""/>
        </div>
    </div>
   

    <div className='section__margin'>
    <h1 className='support_h1'>Upcoming Event 2024</h1>
    <p className='upcoming'>UpComing....</p>
    </div>
    {/*past event*/}
    
    <div className='section__margin support'> 
        
        <h1 className='support_h1'>Past Event</h1>
    </div>

        <div className="scroll_p">
            
        <div className="container_p">
            <img src={s1} alt="chainlink"/>
        </div>
        <div className="container_p">
            <img src={s2} alt="ecpsystem"/>
        </div>
        <div className="container_p">
            <img src={s3} alt=""/>
        </div>
        <div className="container_p ">
            <img src={s4} alt=""/>
        </div>
        <div className="container_p ">
            <img src={s5} alt=""/>
        </div>
      
        <div className=" container_p">        
            <img src={s6} alt=""/>
        </div>
        <div className=" container_p">        
            <img src={s7} alt=""/>
        </div>
    </div>

   </div>
   </>
   
  )
}

export default Support
