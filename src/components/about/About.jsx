import React from 'react'
import './about.css'
import Me from '../../pics/whitewall.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt=''></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>X+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Y+ Completed</small>
            </article>
          </div>

          <p>
          A highly motivated Software Developer with a passion for exploring diverse coding challenges. Initially, I dived into the captivating realm of programming as a self-taught enthusiast, subsequently advancing my skills through an exemplary Software Engineer Bootcamp. Comfortable with both Front-end and Back-end core technologies, I am committed to continuous learning. Actively pursuing the expansion of my IT proficiency, I explore new languages, frameworks, and libraries, including Python and Streamlit.

Known for my inquisitive nature and keen observation of life's intricate 'code,' I find inspiration in true story-based films. Seeking opportunities to contribute my skills and knowledge to innovative projects, I am dedicated to staying in sync with industry trends and emerging technologies.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About

