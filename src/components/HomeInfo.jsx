import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from "../assets/icons"

const InfoBox = ({text, link, btnText}) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
  </div>
  )
}

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug neo-brutalism-blue text-center rounded-md py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>HR.</span>👋
      <br/>
      A Developer from the UK. 
    </h1>
  ),
  2: (
    <InfoBox 
      text="Worked with many companies and acquired a diverse set of skills along the way"
      link="/about"
      btnText="Learn More"
       />
  ),
  3: (
    <InfoBox 
    text="Click the link below to delve into a selection of my Personal Coding projects. 👇"
    link="/projects"
    btnText="Learn More"
     />
  ),
  4: (
    <InfoBox 
    text="Share your vision with me by heading over to the contact page. Let's collaborate and build something amazing together! 🚀"
    link="/contact"
    btnText="Learn More"
     />
  )
}


const HomeInfo = ({currentStage}) => {

  return renderContent[currentStage] || null;
}

export default HomeInfo