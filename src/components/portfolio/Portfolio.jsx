import React from 'react'
import './portfolio.css'
import IMG1 from '../../pics/portfolio_1.webp'
import IMG2 from '../../pics/portfolio_1.webp'
import IMG3 from '../../pics/portfolio_1.webp'
import IMG4 from '../../pics/portfolio_1.webp'
import IMG5 from '../../pics/portfolio_1.webp'
import IMG6 from '../../pics/portfolio_1.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Title two',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Title three',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG4,
    title: 'Title four',
    github: 'http://github.com',
    demo: 'hhttps://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 1,
    image: IMG5,
    title: 'Title five',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Title six',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/14796898-Orion-UI-kit-Charts-templates-infographics-in-Figma'
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
