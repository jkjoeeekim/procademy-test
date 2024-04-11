import React from 'react'
import Image from 'next/image';

import image from '../assets/pic21.jpg';

const PromoPicture = () => {
  return (
    <div className=''>
      <Image width={500} height={500} alt='Pic' className='m-auto' src={image.src}></Image>

    </div>
  )
}

export default PromoPicture
