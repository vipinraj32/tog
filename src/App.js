
import './App.css';
import Header from './container/header/Header';
import Navbar from './container/navbar/Navbar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Support from './container/supports/Support';
import Achievment from './container/achievment/Achievment';
import Team from './container/team/Team';
import Join from './container/Join/Join';
import Footer from './container/footer/Footer';


// import Team from './container/team/Team';
  ;


function App() {
  useEffect(() => {
    AOS.init({
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      duration: 700, // Duration (in ms)
      easing: 'ease', // Easing function
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out when scrolling past them
      anchorPlacement: 'top-bottom', // Position of the element when triggering the animation
    });
  },[]);
  return (
    <div className="App">
      <div className='gradient__bg'>
           <Navbar/>
             <Header data-aos="fade-up"/>
      </div>
       <Support/>
       <Achievment/>
       <Team/>
       <Join/>
       <Footer/>
      
    </div>
  );
}

export default App;
