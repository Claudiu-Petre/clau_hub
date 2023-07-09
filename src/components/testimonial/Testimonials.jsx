import React from 'react'

import './testimonial.css'
import AVTR1 from '../../pics/avatar1.jpeg'
import AVTR2 from '../../pics/avatar2.jpeg'
import AVTR3 from '../../pics/avatar3.jpeg'
import AVTR4 from '../../pics/avatar4.jpeg'
// import AVTR5 from '../../pics/IMG_2320.jpg'



const data  = [
  {
    avatar: AVTR1,
    name: 'Tina Turner',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam porro sunt vero tempore nihil libero rem, animi minus assumenda at earum architecto corrupti nam incidunt corporis, distinctio dicta repellendus?'
  },
  {
    avatar: AVTR2,
    name: 'Michael Jackson',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam porro sunt vero tempore nihil libero rem, animi minus assumenda at earum architecto corrupti nam incidunt corporis, distinctio dicta repellendus?'
  },
  {
    avatar:AVTR3,
    name: 'Bon Jovi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam porro sunt vero tempore nihil libero rem, animi minus assumenda at earum architecto corrupti nam incidunt corporis, distinctio dicta repellendus?'
  },
  {
    avatar:AVTR4,
    name: 'BB king',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam porro sunt vero tempore nihil libero rem, animi minus assumenda at earum architecto corrupti nam incidunt corporis, distinctio dicta repellendus?'
  },
  // {
  //   avatar:AVTR5,
  //   name: 'Leon Leon',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam porro sunt vero tempore nihil libero rem, animi minus assumenda at earum architecto corrupti nam incidunt corporis, distinctio dicta repellendus?'
  // }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt=''/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
