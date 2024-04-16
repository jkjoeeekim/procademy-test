import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import styles from './NaviBar.module.css';
import icon from '../assets/lightning.png';
import icon2 from '../assets/ylwLightning.png';
import iconsvg from '../assets/light.svg';

const NaviBar = () => {
  return (
    <div className='navbar place-content-around sticky top-0 z-10 bg-base-300 h-32 text-white'>
      <div className=''>
        <Link href='/mission' className='btn btn-ghost font-bold rounded-sm'>OUR MISSION</Link>
        <Link href='/feed' className='btn btn-ghost font-bold rounded-sm'>EVENTS</Link>
      </div>
      <div className=''>
        <Link href='/' className='btn btn-ghost font-bold rounded-sm text-3xl tracking-wider'>
          PROCADEMY
          <Image width={320} height={320} alt='Pic' className='w-9' src={icon2.src}></Image>
          {/* <svg className="w-11 h-11 fill-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow-200">
            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg> */}
        </Link>
      </div>
      <div className=''>
        <Link href='/team' className='btn btn-ghost font-bold rounded-sm'>COACHES</Link>
        <Link href='/contact' className='btn font-bold rounded-sm btn-error'>CONTACT</Link>
      </div>
    </div>
  )
}

export default NaviBar