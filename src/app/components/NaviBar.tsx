import React from 'react'
import Link from 'next/link'

import styles from './NaviBar.module.css';
import icon from '../assets/lightning.png';
import icon2 from '../assets/ylwLightning.png';



const NaviBar = () => {
  return (
    <div className='navbar place-content-around sticky top-0 z-10 bg-base-100'>
      <div className=''>
        <Link href='/mission' className='btn btn-ghost'>Our Mission</Link>
        <Link href='/feed' className='btn btn-ghost'>Latest Events</Link>
      </div>
      <div className=''>
        <Link href='/' className='btn btn-ghost text-3xl'>
          PROCADEMY
          <img src={icon2.src} className='w-8 '></img>
        </Link>
      </div>
      <div className=''>
        <Link href='/team' className='btn btn-ghost'>Meet the Coaches</Link>
        <Link href='/contact' className='btn btn-error'>Contact Us</Link>
      </div>
    </div>
  )
}

export default NaviBar