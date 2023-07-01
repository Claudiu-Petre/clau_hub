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
    title: 'Meteorologist',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/21606628-Weather-UI-for-Android'
  },
  {
    id: 3,
    image: IMG3,
    title: 'The Mapper',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/18935350-Milkinside-Globe'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Do$her',
    github: 'http://github.com',
    demo: 'https://dribbble.com/search/pounds'
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
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
