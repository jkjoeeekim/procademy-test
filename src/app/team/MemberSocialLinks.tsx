'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import yt from '../assets/youtube.png';
import dc from '../assets/discord.png';

const MemberSocialLinks = () => {
  return (
    <div className='flex flex-row place-content-center'>
      <Link href='' className='btn btn-ghost'>
        <Image width={20} height={20} alt='Instagram link' className='' src={ig.src}></Image>
      </Link>
      <Link href='' className='btn btn-ghost'>
        <Image width={20} height={20} alt='YouTube link' className='' src={yt.src}></Image>
      </Link>
      <Link href='' className='btn btn-ghost'>
        <Image width={20} height={20} alt='Discord link' className='' src={dc.src}></Image>
      </Link>
      <Link href='' className='btn btn-ghost'>
        <Image width={20} height={20} alt='FaceBook link' className='' src={fb.src}></Image>
      </Link>
    </div>
  )
}

export default MemberSocialLinks