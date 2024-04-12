import React from 'react'
import Image from 'next/image'

import image1 from '../assets/pic20.jpg'
import image2 from '../assets/pic17.jpg'
import image3 from '../assets/pic18.jpg'
import image4 from '../assets/pic13.jpg'
import image5 from '../assets/pic14.jpg'
import image6 from '../assets/pic8.jpg'
import image7 from '../assets/pic15.jpg'
import image8 from '../assets/pic16.jpg'
import image9 from '../assets/pic19.jpg'
import image10 from '../assets/pic3.jpg'

import styles from './Home.module.css'

const HeroPicture = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row place-content-center'>
        <div className='mask mask-hexagon w-64 m-4'></div>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 m-4' src={image7.src}></Image>
        <div className='mask mask-hexagon w-64 m-4'></div>
        <div className='mask mask-hexagon w-64 m-4'></div>
      </div>
      <div className='flex flex-row place-content-center'>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image1.src}></Image>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image2.src}></Image>
        <div className='mask mask-hexagon w-64 m-4'></div>
      </div>
      <div className='flex flex-row place-content-center'>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image3.src}></Image>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image4.src}></Image>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image5.src}></Image>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image6.src}></Image>
      </div>
      <div className='flex flex-row place-content-center'>
        <div className='mask mask-hexagon w-64 m-4'></div>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image8.src}></Image>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image9.src}></Image>
      </div>
      <div className='flex flex-row place-content-center'>
        <div className='mask mask-hexagon w-64 m-4'></div>
        <div className='mask mask-hexagon w-64 m-4'></div>
        <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-64 -mt-24 m-4' src={image10.src}></Image>
        <div className='mask mask-hexagon w-64 m-4'></div>
      </div>
    </div>
    // <div className='flex flex-col'>
    //   <div className='flex flex-row place-content-center'>
    //     <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-80 m-4' src={image1.src}></Image>
    //     <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-80 m-4' src={image2.src}></Image>
    //   </div>
    //   <div className='flex flex-row place-content-center'>
    //     <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-80 -mt-28 m-4' src={image3.src}></Image>
    //     <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-80 -mt-28 m-4' src={image4.src}></Image>
    //     <Image width={320} height={320} alt='Pic' className='mask mask-hexagon w-80 -mt-28 m-4' src={image5.src}></Image>
    //   </div>
    // </div>
  )
}

export default HeroPicture
