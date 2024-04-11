import React from 'react'

import image from '../assets/pic21.jpg';

const ContactForm = () => {
  return (
    <div className='flex flex-row place-items-center bg-zinc-300'>
      <div className='w-1/2'>
        <img src={image.src} className=''></img>
      </div>
      <div className='w-1/2 flex flex-col items-center'>
        <div className='form-control w-2/3'>
          <div className='text-neutral'>
            <p className='font-extrabold text-4xl text-center'>Don't miss a beat!</p>
            <p className='font-extrabold text-4xl text-center'>Join our newsletter!</p>
          </div>
          <label className='input input-bordered input-secondary text-warning mt-5 rounded-none bg-slate-200 gap-10 label'>
            First Name
            <input type='text' placeholder='John' className='text-neutral grow'></input>
          </label>
          <label className='input input-bordered input-secondary text-warning mt-5 rounded-none bg-slate-200 gap-10 label'>
            Last Name
            <input type='text' placeholder='Smith' className='text-neutral grow'></input>
          </label>
          <label className='input input-bordered input-secondary text-warning mt-5 rounded-none bg-slate-200 gap-20 label'>
            Email
            <input type='text' placeholder='example@procademy.com' className='text-neutral grow'></input>
          </label>
          <label className="label cursor-pointer justify-start">
            <input type="checkbox" defaultChecked className="checkbox mt-5 mr-2 checkbox-primary" />
            <span className="label-text text-warning text-xs">Yes, I would like to receive promotional emails from Procademy</span>
          </label>
          <button className='btn btn-primary mt-5'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
