import React from 'react'
import Image from 'next/image';

import image from '../assets/pic12.jpg';
import icon2 from '../assets/ylwLightning.png';

const MemeberCard = () => {
  return (
    <div className='flex flex-row m-5 border-b border-t border-slate-400'>
      <div className='w-1/2 p-2 mt-4 mb-4 border-l border-yellow-400 flex flex-row place-content-center'>
        <Image className='mask mask-circle' width={250} height={250} src={image.src} alt='Basketball Coach'></Image>
      </div>
      <div className='flex p-2 flex-col w-1/2 mt-4 mb-4 border-l-4 border-l-slate-600 border-r border-r-yellow-400 m-auto place-content-around'>
        <div className='flex flex-row place-content-center '>
          <p className='text-3xl'>PROCARD</p>
          <Image width={100} height={100} alt='Pic' className='w-7 ml-2' src={icon2.src}></Image>
        </div>
        <p className='text-2xl text-center'>Name AKA: Nickname</p>
        <p className='text-xl text-center'>Professional smth</p>
        <p className='text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident.</p>
      </div>
    </div>
  )
}

export default MemeberCard