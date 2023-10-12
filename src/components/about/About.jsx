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
            An enthusiastic Software Developer who goes where ever the coding adventure takes him. 
            Initially, discovered the fascinating world of programming as self taught student, 
            plunging, later on, into deep end through an outstanding Software Engineer Bootcamp.
            Apart from the Front and Back-end core technologies, diligently seeks out to expand 
            their IT skills by exploring new Languages, Frameworks and Libraries. Curios and particularly 
            observant of life's 'code', always enjoying an inspiring true story based film.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About

