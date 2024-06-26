import React from 'react'
import Image from 'next/image';

import image from '../assets/pic21.jpg';
import SubmitButton from './SubmitButton';

const ContactForm = () => {
  return (
    <div className='flex flex-row place-items-center bg-zinc-300 max-w-screen-xl m-auto'>
      <div className='w-1/2'>
        <Image width={600} height={600} alt='Pic' className='' src={image.src}></Image>
      </div>
      <div className='w-1/2 flex flex-col items-center mt-5'>
        <div className='form-control w-2/3'>
          <div className='text-neutral'>
            <p className='font-extrabold text-2xl text-center'>Don't miss a beat!</p>
            <p className='font-extrabold text-2xl text-center'>Join our newsletter!</p>
          </div>
          <label className='input input-bordered input-secondary text-xs text-warning mt-5 rounded-none bg-slate-200 gap-10 label h-9'>
            First Name
            <input type='text' placeholder='John' className='text-neutral grow'></input>
          </label>
          <label className='input input-bordered input-secondary text-xs text-warning mt-5 rounded-none bg-slate-200 gap-10 label h-9'>
            Last Name
            <input type='text' placeholder='Smith' className='text-neutral grow'></input>
          </label>
          <label className='input input-bordered input-secondary text-xs text-warning mt-5 rounded-none bg-slate-200 gap-4 md:gap-10 lg:gap-20 label h-9'>
            Email
            <input type='text' placeholder='example@procademy.com' className='text-neutral grow'></input>
          </label>
          <label className="label cursor-pointer mt-2 justify-start">
            <input type="checkbox" defaultChecked className="checkbox mr-2 checkbox-primary" />
            <span className="label-text text-warning text-xs ml-1">Yes, I would like to receive promotional emails from Procademy</span>
          </label>
          <SubmitButton></SubmitButton>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
