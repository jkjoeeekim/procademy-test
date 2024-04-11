import React from 'react'

import image1 from '../assets/pic9.jpg'
import image2 from '../assets/pic11.jpg'
import image3 from '../assets/pic12.jpg'
import image4 from '../assets/pic17.jpg'

import styles from './Home.module.css';


const Testimonials = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full bg-warning">
        <div className="flex flex-col w-full">
          <div className='mx-auto text-center m-5 mt-16'>
            <p className='w-1/2 text-6xl font-extrabold'>
              TESTIMONIALS
            </p>
          </div>
          <div className='flex flex-row place-content-center m-5 mb-16'>
            <img src={image1.src} className='mask mask-hexagon w-44 mr-10'></img>
            <div className='w-1/3 flex items-center'>
              <p className='text-center text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full bg-warning">
        <div className="w-full flex flex-col">
          <div className="flex flex-col w-full">
          <div className='mx-auto text-center m-5 mt-16'>
            <p className='w-1/2 text-6xl font-extrabold'>
              TESTIMONIALS
            </p>
          </div>
          <div className='flex flex-row place-content-center m-5 mb-16'>
            <div className='w-1/3 flex items-center'>
              <p className='text-center text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
            </div>
            <img src={image2.src} className='mask mask-hexagon w-44 ml-10'></img>
          </div>
        </div>
        </div>        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full bg-warning">
        <div className="w-full flex flex-col">
          <div className="flex flex-col w-full">
          <div className='mx-auto text-center m-5 mt-16'>
            <p className='w-1/2 text-6xl font-extrabold'>
              TESTIMONIALS
            </p>
          </div>
          <div className='flex flex-row place-content-center m-5 mb-16'>
            <img src={image3.src} className='mask mask-hexagon w-44 mr-10'></img>
            <div className='w-1/3 flex items-center'>
              <p className='text-center text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
            </div>
          </div>
        </div>
        </div>        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full bg-warning">
        <div className="w-full flex flex-col">
          <div className="flex flex-col w-full">
          <div className='mx-auto text-center m-5 mt-16'>
            <p className='w-1/2 text-6xl font-extrabold'>
              TESTIMONIALS
            </p>
          </div>
          <div className='flex flex-row place-content-center m-5 mb-16'>
            <div className='w-1/3 flex items-center'>
              <p className='text-center text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>
            </div>
            <img src={image4.src} className='mask mask-hexagon w-44 ml-10'></img>
          </div>
        </div>
        </div>        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
