import React from 'react';
import Image from 'next/image';

import image from '../assets/pic12.jpg';

let largeViewportRules = '';

const TeamMembers = () => {
  return (
    <div className='flex flex-col m-auto w-4/5'>
      <div className='flex flex-row m-5 bg-warning rounded-3xl'>
        <div className='w-2/5 pl-5'>
          <Image className='mask mask-circle' width={300} height={450} src={image.src} alt='Basketball Coach'></Image>
        </div>
        <div className='flex flex-col w-3/5 \ m-auto'>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
        </div>
      </div>
      <div className='flex flex-row m-5 bg-warning rounded-3xl'>
        <div className='w-2/5 pl-5'>
          <Image className='mask mask-circle' width={300} height={450} src={image.src} alt='Basketball Coach'></Image>
        </div>
        <div className='flex flex-col w-3/5 \ m-auto'>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
        </div>
      </div>
      <div className='flex flex-row m-5 bg-warning rounded-3xl'>
        <div className='w-2/5 pl-5'>
          <Image className='mask mask-circle' width={300} height={450} src={image.src} alt='Basketball Coach'></Image>
        </div>
        <div className='flex flex-col w-3/5 \ m-auto'>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
        </div>
      </div>
      <div className='flex flex-row m-5 bg-warning rounded-3xl'>
        <div className='w-2/5 pl-5'>
          <Image className='mask mask-circle' width={300} height={450} src={image.src} alt='Basketball Coach'></Image>
        </div>
        <div className='flex flex-col w-3/5 \ m-auto'>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
        </div>
      </div>
      <div className='flex flex-row m-5 bg-warning rounded-3xl'>
        <div className='w-2/5 pl-5'>
          <Image className='mask mask-circle' width={300} height={450} src={image.src} alt='Basketball Coach'></Image>
        </div>
        <div className='flex flex-col w-3/5 \ m-auto'>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
          <p className='text-2xl text-center'>Name: David So</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers