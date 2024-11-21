  import React from 'react'
  import './team.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTwitter, faTelegramPlane, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
  import vipin from '../../assets/vipin.png'
  import arun from '../../assets/Arun.jpg'
  import Aditya from '../../assets/aditya.jpg'
  import aniket from '../../assets/aniket.png'
  import sameer from '../../assets/sameer.jpg'
  const Team = () => {
    return (
      <div className='section__margin'>
          <div className='team_our'>
              <p>Team</p>
              <h1>Our Core Team</h1>
          </div>
          <div className="team_container team">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={aniket} alt="" />

                </div>
                <div className="contentBx ">
                  <h3>Aniket sahu<br /><span>Co-Founder</span></h3>
                </div>
              </div>
              <ul className='sci p-1'>
                <li style={{'--i':1}}>
                  <a href="https://x.com/Aniketsahu_115"><FontAwesomeIcon icon={faTwitter} /></a>
                </li><li style={{'--i':2}}>
                  <a href="https://www.linkedin.com/in/aniketsahu115/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li style={{'--i':3}}>
                  <a href="https://t.me/aniketsahu115"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                </li>

              </ul>
            </div>


            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={arun} alt="" />

                </div>
                <div className="contentBx">
                  <h3>Arun Pratap Singh <br /><span>Co-founder</span></h3>
                </div>
              </div>
              <ul className='sci p-1'>
                <li style={{'--i':1}}>
                  <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                </li><li style={{'--i':2}}>
                  <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li style={{'--i':3}}>
                  <a href=""><FontAwesomeIcon icon={faTelegramPlane} /></a>
                </li>

              </ul>
            </div>
            
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={vipin} alt="" />

                </div>
                <div className="contentBx">
                  <h3>Vipin Singh <br /><span>Full Stack developer</span></h3>
                </div>
              </div>
              <ul className='sci p-1'>
                <li style={{'--i':1}}>
                  <a href="https://x.com/FlexDev_Vipin"><FontAwesomeIcon icon={faTwitter} /></a>
                </li><li style={{'--i':2}}>
                  <a href="https://www.linkedin.com/in/vipin-rajpoot-2b019b261/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li style={{'--i':3}}>
                  <a href="https://t.me/vipinsingh2005"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                </li>

              </ul>
            </div>

            
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={sameer} alt="" />

                </div>
                <div className="contentBx">
                  <h3>Sameer Mishra<br /><span>community manager</span></h3>
                </div>
              </div>
              <ul className='sci p-1'>
                <li style={{'--i':1}}>
                  <a href="https://x.com/sameermishra__"><FontAwesomeIcon icon={faTwitter} /></a>
                </li><li style={{'--i':2}}>
                  <a href="https://www.linkedin.com/in/sameer-mishra-967412239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li style={{'--i':3}}>
                  <a href="https://t.me/sameer_mishra612"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                </li>

              </ul>
            </div>

           
            
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Aditya} alt="" />

                </div>
                <div className="contentBx">
                  <h3>Aditya Raj<br /><span>Content Head</span></h3>
                </div>
              </div>
              <ul className='sci p-1'>
                <li style={{'--i':1}}>
                  <a href="https://x.com/aditya7282"><FontAwesomeIcon icon={faTwitter} /></a>
                </li><li style={{'--i':2}}>
                  <a href="https://www.linkedin.com/in/aditya-raj-165761259"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li style={{'--i':3}}>
                  <a href=""><FontAwesomeIcon icon={faTelegramPlane} /></a>
                </li>

              </ul>
            </div>
           
          </div>
    
        
      </div>
    )
  }

  export default Team
