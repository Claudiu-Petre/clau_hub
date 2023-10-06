import React from 'react'
import './portfolio.css'
import IMG1 from '../../pics/flip.gif'
import IMG2 from '../../pics/weather.gif'
import IMG3 from '../../pics/cycling.gif'
import IMG4 from '../../pics/money.gif'
import IMG5 from '../../pics/ship.gif'
import IMG6 from '../../pics/the_bookist.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Flip-Flop',
    github: 'https://github.com/Claudiu-Petre/flips',
    demo: 'https://flips.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Forecaster',
    github: 'https://github.com/Claudiu-Petre/WeatherApp',
    demo: 'https://forecast-er.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tracker',
    github: 'https://github.com/Claudiu-Petre/tracker',
    demo: 'https://trak-er.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Do$hing',
    github: 'https://github.com/Claudiu-Petre/dosher',
    demo: 'https://doshing.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cruise Ship',
    github: 'https://github.com/Claudiu-Petre/cruise-ships-gui',
    demo: 'https://cruise-ship.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Bookist (API)',
    github: 'https://github.com/Claudiu-Petre/bookist',
    // demo: 'https://dribbble.com/shots/20454786-E-Book-Dashboard'
    demo: 'https://cdn.dribbble.com/userupload/10297166/file/original-ed565d2900874c3339c4bb176f6faa52.mp4'

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My Recent Work</h5> */}
      <h2>My Projects</h2>

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
