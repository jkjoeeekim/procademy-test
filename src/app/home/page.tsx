import React from 'react'

import HeroPicture from './HeroPicture';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import PromoPicture from './PromoPicture';
import Sponsors from './Sponsors';

const HomePage = () => {
  return (
    <div>
      <div className='mt-10 mb-10'>
        <HeroPicture></HeroPicture>
      </div>
      <div className='mt-10 mb-10'>
        <ContactForm></ContactForm>
      </div>
      {/* <div className='mt-10 mb-10'>
        <PromoPicture></PromoPicture>
      </div> */}
      <div className='mt-10 mb-10'>
        <Testimonials></Testimonials>
      </div>
      <div>
        <Sponsors></Sponsors>
      </div>
    </div>
  )
};

export default HomePage
