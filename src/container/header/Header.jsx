import React from 'react'
import tog from '../../assets/tog1.png'
import people from '../../assets/people.png'
import './header.css'
import 'animate.css';

const Header = () => {
  return (
    <div className="npl_header section__padding" id="home">
    <div className="npl_header-content" >
      <h1 className="gradient__text" data-aos="fade-left"> The Origin Guild Bhopal</h1>
      <p data-aos="fade-up-right">Empowers Web3 enthusiasts through collaboration, workshops and networking fostering innovation and learning to build a thriving decentralized ecosystem for blockchain professionals and beginners a like.</p>

      <div className="npl_header-content_input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Newsletter</button>
      </div>

      <div className="npl_header-content_people">
        <img src={people} alt='people'/>
        <p>600+ people sign up for Newsletter/visit in last 1 month </p>
      </div>
    </div>

    <div className="npl_header-image">
      <img src={tog} alt='The Origin Guild'/>
    </div>
  </div>
  )
}

export default Header
