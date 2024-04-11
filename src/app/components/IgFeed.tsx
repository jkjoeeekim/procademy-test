'use client';

import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'


const IgFeed = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/C5bv1xRSI2K/" width={328} />
      </div>
    </div>
  )
}

export default IgFeed