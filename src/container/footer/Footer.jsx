import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import logo from '../../assets/toglogo.png'
function Footer() {
  return (
 
      <div className="section__margin">  
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 footer-logo">
            <h3 className="mb-1"><img src={logo } alt="" /></h3>
          
          </div>

          {/* Links - Products */}
          <div className="col-md-2">
            <h5 className="join-h5">Events</h5>
            <ul className="list-unstyled li-color">
              <li>Overview/About Event</li>
              <li>Upcoming Event</li>
              <li>On Going Event</li>
              <li>Past Events</li>
              
            </ul>
          </div>

          {/* Links - Resources */}
          <div className="col-md-2">
            <h5 className="join-h5">Resources</h5>
            <ul className="list-unstyled li-color">
              <li><a href="https://medium.com/@theoriginguild">Blog</a></li>
              <li><a href="https://soliditylang.org/">Solidity</a></li>
              <li><a href="https://www.rust-lang.org/">Rust</a></li>
              <li><a href="https://solana.com/">Solana</a></li>
              <li><a href="https://ethereum.org/en/">Ethereum</a></li>
            </ul>
          </div>

          {/* Links - Supported Chains */}
          <div className="col-md-2">
            <h5 className="join-h5 ">Social Media</h5>
          
            <ul className="list-unstyled li-color">
              <li><a href="https://x.com/og_guild">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/origin-guild">Linkdln</a></li>
              <li>Discord</li>
              <li><a href="https://t.me/theog_guild">Telegram</a></li>
            </ul>
          </div>

          {/* Links - About Us */}
          <div className="col-md-2">
            <h5 className="join-h5 ">Collaboration</h5>
            <ul className="list-unstyled li-color">
              <li><a href="mailto:originguild11@gmail.com">Bootcamp</a></li>
              <li><a href="mailto:originguild11@gmail.com"></a>Workshop</li>
              <li><a href="mailto:originguild11@gmail.com">Technical Event</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 text-light">Copyright ©2024</p>
          <div className='li-scr'>
            <a href="https://x.com/og_guild" className="text-light me-3">
           
            <FontAwesomeIcon icon={faTwitter} />  
            </a>
            <a href="https://www.linkedin.com/company/origin-guild" className="text-light  me-3">
       
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
            <a href="https://t.me/theog_guild" className="text-light">
               <FontAwesomeIcon icon={faTelegramPlane}/>
            </a>
          </div>
        </div>
      </div>
  
  );
}

export default Footer;