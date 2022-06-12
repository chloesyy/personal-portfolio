import React from 'react'
import './about.css'
import ME from '../../assets/dp.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Internships</h5>
                        <small>Gigacover, GovTech</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Education</h5>
                        <small>NUS Computer Engineering</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>Data/AI-related</small>
                    </article>
                </div>

                <p>
                    Hello! I'm a postgraduate student at NUS in MSc Business Analytics, and I graduated from NUS Computer Engineering in May 2022. I have experience in Data/AI Engineering and am always looking to challenge myself through projects and new experiences. 
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About