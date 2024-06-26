import React from 'react'
import Image from 'next/image';

import image from '../assets/pic12.jpg';
import icon2 from '../assets/ylwLightning.png';
import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import yt from '../assets/youtube.png';
import dc from '../assets/discord.png';
import MemberSocialLinks from './MemberSocialLinks';

const MemeberCard = () => {
  return (
    <div className='flex flex-row mt-10 mb-10 border-b-4 border-t-4 border-slate-400 max-w-screen-lg m-auto bg-base-300 text-white'>
      <div className='w-1/2 p-2 mt-2 mb-2 border-l-4 border-yellow-400 flex flex-row place-content-center'>
        <Image className='mask mask-hexagon' width={175} height={175} src={image.src} alt='Basketball Coach'></Image>
      </div>
      <div className='flex p-2 flex-col w-1/2 mt-2 mb-2 border-l-4 border-l-slate-600 border-r-4 border-r-yellow-400 m-auto'>
        <div className='flex flex-row place-content-center pb-2 border-b border-b-slate-400'>
          <p className='text-2xl font-bold tracking-wider'>PROCARD</p>
          <Image width={100} height={100} alt='Pic' className='w-7 ml-2' src={icon2.src}></Image>
        </div>
        <div className='border-b border-b-slate-400 pb-3 pt-3'>
          <p className='text-xl text-center'>Name AKA: Nickname</p>
          <p className='text-md text-center'>Professional smth</p>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident.</p>
        </div>
        <MemberSocialLinks></MemberSocialLinks>
      </div>
    </div>
  )
}

export default MemeberCard