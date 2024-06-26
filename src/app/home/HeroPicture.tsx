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

let topLayerClassName = 'mask mask-hexagon sm:w-32 sm:m-1 md:w-48 md:m-2 lg:w-64 lg:m-4';
let otherLayerClassName = 'mask mask-hexagon sm:w-32 sm:m-1 sm:-mt-12 md:w-48 md:m-2 md:-mt-20 lg:w-64 lg:-mt-24 lg:m-4';
let topLayerEmptyDiv = 'mask mask-hexagon sm:w-32 sm:m-1 md:w-48 md:m-2 lg:w-64 lg:m-4';
let otherLayerEmptyDiv = 'mask mask-hexagon sm:w-32 sm:m-1 md:w-48 md:m-2 lg:w-64 lg:m-4';

const HeroPicture = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row place-content-center'>
        <div className={topLayerEmptyDiv}></div>
        <Image width={320} height={320} alt='Pic' className={topLayerClassName} src={image7.src}></Image>
        <div className={topLayerEmptyDiv}></div>
        <div className={topLayerEmptyDiv}></div>
      </div>
      <div className='flex flex-row place-content-center'>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image1.src}></Image>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image2.src}></Image>
        <div className={otherLayerEmptyDiv}></div>
      </div>
      <div className='flex flex-row place-content-center'>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image3.src}></Image>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image4.src}></Image>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image5.src}></Image>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image6.src}></Image>
      </div>
      <div className='flex flex-row place-content-center'>
        <div className={otherLayerEmptyDiv}></div>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image8.src}></Image>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image9.src}></Image>
      </div>
      <div className='flex flex-row place-content-center'>
        <div className={otherLayerEmptyDiv}></div>
        <div className={otherLayerEmptyDiv}></div>
        <Image width={320} height={320} alt='Pic' className={otherLayerClassName} src={image10.src}></Image>
        <div className={otherLayerEmptyDiv}></div>
      </div>
    </div>
  )
}

export default HeroPicture
