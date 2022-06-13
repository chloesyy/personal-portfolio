import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    const sections = document.querySelectorAll(['section', 'header']);
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop-sectionHeight/2) {
                current = section.getAttribute('id');
            }
        })

        if (current == null) {
            current = '#';
        }
        setActiveNav(current);
    });
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook /></a>
        <a href="#internships" onClick={() => setActiveNav('internships')} className={activeNav === 'internships' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav