import React from 'react'
import "./intro.css";
import miimage from "../../assets/myimg.jpg";
import { Link } from 'react-scroll';


const Intro = () => {
  return (<>
  <section className="intro">
    <div className='introcontent'>
  <span className='hello'>hello,</span>
    <span className='introtext'>I`m <span className='introname'>Rajan Kumar</span><br/>website developer</span>
    
    <p className='intropara'>In am skilled and passionate website developer with experience in creating <br/>virtually apealing and user-friendly website</p>
    <Link><button className='btn'>hire me</button></Link>
  </div>
  
    <img src={miimage} alt="myimage" className='introimg'/>
  
  </section>
  </>
    )
}

export default Intro