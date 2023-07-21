import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div className='experience__frontend'>
          <h3>Frontend Development & Tools</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CLI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>GITHub</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        {/* end of FRONTEND */}

        <div className='experience__backend'>
        <h3>Backend Development & Tools</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ExpressJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TDD Jest</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
          
        </div>
        {/* end of BACKEND */}

        {/* <h3>Frontend Development & Tools</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div> */}

      </div>
    </section>
  )
}

export default Experience
