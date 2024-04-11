import React from 'react'

import image from '../assets/pic21.jpg';

const ContactForm = () => {
  return (
    <div className='flex flex-row place-items-center bg-zinc-300'>
      <div className='w-1/2'>
        <img src={image.src} className=''></img>
      </div>
      <div className='form-control text-neutral w-1/2'>
        <div>
          <div className='label'>
            name
          </div>
          <input type='text' className='input input-bordered input-warning bg-slate-200'></input>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
