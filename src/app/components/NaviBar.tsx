'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import styles from './NaviBar.module.css';
import icon from '../assets/lightning.png';
import icon2 from '../assets/ylwLightning.png';
import iconsvg from '../assets/light.svg';

var height = 'h-16'

var NaviBar = () => {
  var h = 'h-24';
  return (
    <div className={`sticky top-0 z-10 ${h} bg-base-300 text-white`} id='navibars'>
      <div className={`navbar place-content-around ${h} max-w-screen-2xl m-auto`}>
        <div className=''>
          <Link href='/' className='btn btn-ghost font-bold hover:bg-slate-500 border-r-slate-500 border-r-1 rounded-sm text-3xl tracking-wide'>
            PROCADEMY
            {/* <Image width={320} height={320} alt='Pic' className='w-9' src={icon2.src}></Image> */}
            {/* <svg className="w-11 h-11 fill-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow-200">
                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg> */}
          </Link>
          <Link href='/mission' className='btn btn-ghost hover:bg-slate-500 border-l-slate-500 border-l-1 font-bold rounded-sm :'>OUR MISSION</Link>
        </div>
        <div className=''>
          <Link href='/feed' className='btn btn-ghost font-bold hover:bg-slate-500 rounded-sm'>EVENTS</Link>
          <Link href='/team' className='btn btn-ghost font-bold hover:bg-slate-500 rounded-sm'>COACHES</Link>
          <Link href='/contact' className='btn font-bold rounded-sm btn-error'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default NaviBar