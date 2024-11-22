import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/tog.png'
import './navbar.css'

// BEM = Block Element Modifier


const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  const boxStyle={
    boxShadow:'rgba(255, 255, 255, 0.13) 0px 2px 8px 0px',
    backdropFilter:' blur(10px)'
  };
  return (
   
    <div className='npl_navbar fixed-top' style={boxStyle}>
      <div className="npl_navbar-links " >
        <div className=" 
        npl_navbar-links_logo"><h1><img href="home" src={logo}/>

        </h1>
      </div>
      <div div className='npl_navbar-links_container '>
       <p><a href="#home" active>About TOG</a></p>
       <p><a href="#">TOG Chapters</a></p>
       <p><a href="https://medium.com/@theoriginguild">Resource</a></p>
      
      </div> 
    </div>
    <div className="npl_navbar-sign">
      <button type='button'><a href="https://chat.whatsapp.com/HsDiELGi2OmL12NzzhnE2D">Join Community</a></button>
    </div>
    <div className="npl_navbar-menu">
        {toggleMenu
         ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
 
        }

        {
          toggleMenu && (
            <div className="npl_navbar-menu_container scale-up-center ">
              <div className="npl_navbar-menu_container-links">
              <p><a href="#home" className='active'>About TOG</a></p>
              <p><a href="#">TOG Chapters</a></p>
              <p><a href="https://medium.com/@theoriginguild">Resource</a></p>
                </div>
                <div className="npl_navbar-menu_container-links-sign">
                <button type='button'><a href="https://chat.whatsapp.com/HsDiELGi2OmL12NzzhnE2D">Join Community</a></button>  
                </div>
              </div>
            
          )
        }
    </div>
    </div>

  );
}

export default Navbar
