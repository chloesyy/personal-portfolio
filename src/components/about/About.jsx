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
                        <small>10+ Completed</small>
                    </article>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, a doloremque error maxime est porro similique consectetur minus provident quod eveniet aliquam sunt nemo quam voluptates mollitia quibusdam possimus tempore.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About