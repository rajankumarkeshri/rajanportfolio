import React, { useState } from 'react'
import {Link} from "react-scroll";
import "./header.css";
import { useAuth0 } from "@auth0/auth0-react";
import humburger from "../assets/humburger.png";
import logo from "../assets/logo.png"

const Header = () => {

  const [showmenu,setshowmenu] = useState(false);
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();

  return (
    
    <nav className='navbar'>
        <img src={logo} height="40px" width="10" alt="portfoliologo" className="portfolioLogo"/>
        <div className="desktopmenu">
        <Link activeClass="active" to="intro" spy={true} smooth="true" offset={-100} duration={500} className="desktopmenulistitem">intro</Link>
        <Link activeClass="active" to="skill" spy={true} smooth="true" offset={-50} duration={500} className="desktopmenulistitem">skill</Link>
        <Link activeClass="active" to="works" spy={true} smooth="true" offset={-100} duration={500} className="desktopmenulistitem">work</Link>
        {
          isAuthenticated ? (
            <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Link>
          ) : (
            <Link onClick={() => loginWithRedirect()}>Log In</Link>
          )
        }

       </div>
        
       <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='desktopmenubtn'>
       <img src="" alt="conta" className="desktopmenucontact"/>
     </Link>
      
  
     <img src={humburger} height="20px" width="14" alt="menu" className="mobmenu" onClick={()=>{setshowmenu(!showmenu)}}/>
     <div className="navmenu" style={{display: showmenu? 'flex': 'none'}}>
     <Link activeClass="active" to="intro" spy={true} smooth="true" offset={-100} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>intro</Link>
     <Link activeClass="active" to="skill" spy={true} smooth="true" offset={-50} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>skill</Link>
     <Link activeClass="active" to="works" spy={true} smooth="true" offset={-100} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>work</Link>
     {
      isAuthenticated && (
        <p>{user.name}</p>
      )
     }
     {
      isAuthenticated ? (
        <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </Link>
      ) : (
        <Link onClick={() => loginWithRedirect()}>Log In</Link>
      )
    }
     <Link activeClass="active" to="contact" spy={true} smooth="true" offset={-100} duration={500} className="listitem" onClick={()=>{setshowmenu(false)}}>Contact</Link>
     

    </div>
        
        
    </nav>
    
  )
}

export default Header;