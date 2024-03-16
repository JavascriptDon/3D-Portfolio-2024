import React from 'react'
import {Link} from 'react-router-dom';
import {socialLinks} from '../constants/index';
const CTA = () => {
  return (
    <div>
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden'/> Let's build something together!</p>
        <Link to="/contact" className="btn">Contact</Link>
    </section>
    <hr className='border-slate-200'/>
    {socialLinks.map((social, index) => (
        <div key={index} className=" mt-4 mb-4  inline-flex p-2 ">
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <img
              src={social.iconUrl}
              alt={social.name}
              className='w-4 h-4 object-contain'
            />
          </a>
        </div>
        ))}
    </div>
  )
}

export default CTA