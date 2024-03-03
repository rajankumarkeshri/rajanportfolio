import React from 'react'
import "./skill.css";
import skillimg from "../../src/assets/logo512.png"
const Skill = () => {
  return (
    <section id="skill">
        <span className='skilltitle'>What I Do</span>
        <span className='skilldesc'>In am skilled and passionate website developer with experience in creating virtually apealing and user-friendly website In am skilled and passionate website developer with experience in creating virtually apealing and user-friendly website</span>
    <div className='skillbars'>
        <div className="skillbar">
            <img src={skillimg} alt="skillimg" className='skillimg' height="50px"width="50px"/>
            <div className='skillbartext'>
            <h2>UX/UI DESIGN</h2>
                <p>In am skilled and passionate website developer with experience in creating</p>
            </div>
        </div>

        <div className="skillbar">
            <img src={skillimg} alt="skillimg" className='skillimg'height="50px"width="50px"/>
            <div className='skillbartext'>
                <h2>UX/UI DESIGN</h2>
                <p>In am skilled and passionate website developer with experience in creating</p>
            </div>
        </div>


        <div className="skillbar">
            <img src={skillimg} alt="skillimg" className='skillimg' height="50px"width="50px"/>
            <div className='skillbartext'>
            <h2>UX/UI DESIGN</h2>
                <p>In am skilled and passionate website developer with experience in creating</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Skill