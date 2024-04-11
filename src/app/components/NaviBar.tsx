import React from 'react'
import Link from 'next/link'

import styles from './NaviBar.module.css';



const NaviBar = () => {
  return (
    <div className='navbar'>
        <div className='flex-1'>
            <Link href='/mission' className='btn btn-ghost'>Our Mission</Link>
            <Link href='/feed' className='btn btn-ghost'>Latest Events</Link>
            <Link href='/team' className='btn btn-ghost'>Meet the Coaches</Link>
        </div>
        <div className='flex-none'>
            <Link href='/contact' className='btn btn-error'>Contact Us</Link>
        </div>
    </div>
  )
}

export default NaviBar