import React from 'react'
import Link from 'next/link'

import styles from './NaviBar.module.css';



const NaviBar = () => {
  return (
    <div className={styles.naviBar}>
        <Link href='/mission' className='p-5'>Our Mission</Link>
        <Link href='/feed' className='p-5 bg-slate-400'>Latest</Link>
        <Link href='/team' className='text-sm hover:bg-slate-800'>Our Coaches</Link>
        <Link href='/contact'>Contact Us</Link>
    </div>
  )
}

export default NaviBar