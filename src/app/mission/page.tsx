import React from 'react'
import Image from 'next/image';

import NaviBar from '../components/NaviBar'
import Footer from '../components/Footer'

import image from '../assets/pic11.jpg';

const MissionPage = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <NaviBar></NaviBar>
      <div className='min-h-[600px] max-h-[600px] min-w-[500px] max-w-[500px] bg-white m-auto rounded-sm border-warning border-4'>
        <div className='flex flex-row place-content-between'>
          <Image width={175} height={175} src={image.src} className='mask mask-hexagon ml-4' alt='Picture of Procademy Founder'></Image>
          <div className='m-auto'>
            <p className='text-black text-3xl text-center mr-4 mt-2'>MISSION STATEMENT FROM OUR FOUNDER</p>
          </div>
        </div>
        <div className='p-12'>
          <p className='text-black'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatistotam voluptas nostrum quisquam eum porro a pariatur veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatistotam voluptas nostrum quisquam eum porro a pariatur veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatistotam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MissionPage