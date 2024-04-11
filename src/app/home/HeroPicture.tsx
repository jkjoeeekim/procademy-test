import React from 'react'
import image1 from '../assets/pic20.jpg'
import image2 from '../assets/pic19.jpg'
import image3 from '../assets/pic18.jpg'
import image4 from '../assets/pic13.jpg'
import image5 from '../assets/pic14.jpg'

import styles from './Home.module.css'

const HeroPicture = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row place-content-center'>
        <img className="mask mask-hexagon w-80 m-4" src={image1.src}></img>
        <img className="mask mask-hexagon w-80 m-4" src={image2.src}></img>
      </div>
      <div className='flex flex-row place-content-center'>
        <img className='mask mask-hexagon w-80 -mt-28 m-4' src={image3.src}></img>
        <img className='mask mask-hexagon w-80 -mt-28 m-4' src={image4.src}></img>
        <img className='mask mask-hexagon w-80 -mt-28 m-4' src={image5.src}></img>
      </div>
    </div>
  )
}

export default HeroPicture
