import React from 'react';
import Image from 'next/image';

import MemeberCard from './MemeberCard';

let largeViewportRules = '';

const TeamMembers = () => {
  return (
    <div className='flex flex-col m-auto w-4/5'>
      <div className='mb-64'></div>
      <MemeberCard></MemeberCard>
      <MemeberCard></MemeberCard>
      <MemeberCard></MemeberCard>
      <MemeberCard></MemeberCard>
      <MemeberCard></MemeberCard>
      <div className='mb-64'></div>
    </div>
  )
}

export default TeamMembers