import React from 'react'
import './portfolio.css'
import IMG1 from '../../pics/dashboard.webp'
import IMG2 from '../../pics/meteorologist.webp'
import IMG3 from '../../pics/mapper.webp'
import IMG4 from '../../pics/dosher.webp'
import IMG5 from '../../pics/cruiseship.webp'
import IMG6 from '../../pics/the_bookist.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dashboard, Python',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Forecast-er',
    github: 'https://github.com/Claudiu-Petre/WeatherApp',
    demo: 'https://forecast-er.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tracker',
    github: 'https://github.com/Claudiu-Petre/tracker',
    demo: 'https://magenta-stardust-14f14c.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Do$her',
    github: 'https://github.com/Claudiu-Petre/dosher',
    demo: 'https://profound-begonia-244a01.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cruise Ship',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/4395535-BOS-Corporate-Event-2'
  },
  {
    id: 6,
    image: IMG6,
    title: 'The Bookist',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/20454786-E-Book-Dashboard'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                  {/* <div className='language'>Python</div> */}
                </div>
              </article>
            )
          })
        }

       
      </div>
    </section>
  )
}

export default Portfolio
