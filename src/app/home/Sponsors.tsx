import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import image from '../assets/anti.png';

const Sponsors = () => {
  return (
    <div className='flex flex-col place-content-evenly mt-10 mb-10 p-10 bg-white max-w-screen-xl m-auto'>
      <div className='mb-5'>
        <p className='text-2xl font-bold text-warning'>PROUD SPONSORS</p>
      </div>
      <div className='flex flex-row w-sreen place-content-around'>
        <Link href='https://theantibrand.com/' target='_blank'>
          <Image width={180} height={180} src={image.src} alt='ANTI Clothing Apparel'></Image>
        </Link>
        <Link href='https://theantibrand.com/' target='_blank'>
          <Image width={180} height={180} src={image.src} alt='ANTI Clothing Apparel'></Image>
        </Link>
      </div>
      <div className='flex flex-row justify-end mt-3'>
        <Link href='/contact' className='text-2xl font-bold text-black p-2 hover:text-warning'>Join our sponsors</Link>
      </div>
    </div>
  )
}

export default Sponsors