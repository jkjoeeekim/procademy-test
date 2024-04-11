'use client';
import React from 'react'
import HeroPicture from './HeroPicture';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const HomePage = () => {
  return (
    <div>
      <div className='m-10'>
        <HeroPicture></HeroPicture>
      </div>
      <div className='m-10'>
        <Testimonials></Testimonials>
      </div>
      <div className='m-10'>
        <ContactForm></ContactForm>
      </div>
    </div>
  )
};

export default HomePage
