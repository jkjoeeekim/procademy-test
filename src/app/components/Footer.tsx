import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-base-300 h-20 text-white'>
      <div className='navbar place-content-around h-20 max-w-screen-2xl m-auto'>
        <div className=''>
          <Link href='/mission' className='btn btn-ghost'>Our Mission</Link>
          <Link href='/feed' className='btn btn-ghost'>Latest Events</Link>
        </div>
        <div className=''>
          <Link href='/' className='btn btn-ghost'>
            PROCADEMY 2024 LLC
          </Link>
        </div>
        <div className=''>
          <Link href='/team' className='btn btn-ghost'>Some legal info</Link>
          <Link href='/contact' className='btn btn-ghost'>Contact Us</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer