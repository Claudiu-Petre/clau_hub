import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../pics/whitewall.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
  <header>
    <div className='container header_container'>
      <h5>Hello, I am</h5>
      <h1>Claudiu Petre</h1>
      <h5 className='text-light'>Fullstack Software Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={Me} alt='me'/>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>

    </div>

   </header>

  )
}

export default Header
