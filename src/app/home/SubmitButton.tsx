'use client';
import React from 'react'

const SubmitButton = () => {
  return (
    <button className='btn btn-primary mt-2 mb-5 rounded-sm' onClick={() => console.log('clicked')}>
      Submit
    </button>
  )
}

export default SubmitButton
