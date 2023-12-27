import React from 'react'
import WebApplication from '../assets/icons/WebApplication'
import Responsive from '../assets/icons/Responsive'
import FastDelivery from '../assets/icons/FastDelivery'

const Services = () => {
  return (
    <div className='p-2'>
      <h1 className='text-3xl font-bold py-6 text-center'>My Services</h1>
      <div className='flex items-center flex-wrap gap-3 justify-around'>
        <div className='px-3 py-2 max-w-[25em] rounded-lg bg-gray-100 border-gray-300 shadow-md shadow-stone-300 min-h-[14em] transition-all duration-500 ease-in hover:bg-emerald-100 hover:fill-white hover:text-stone-500'>
          <WebApplication styles='w-16 p-2 aspect-square fill-emerald-500 mx-auto' />
          <p className='text-justify'>
            Highly skilled in crafting customized solutions that precisely align
            with your business requirements. Specializing in the development of
            advanced web applications, I bring expertise to enhance your digital
            presence and streamline operations, ensuring a tailored approach to
            meet your unique objectives.
          </p>
        </div>
        <div className='px-3 py-2 max-w-[25em] rounded-lg bg-gray-100 border-gray-300 shadow-md shadow-stone-300 min-h-[14em] transition-all duration-500 ease-in hover:bg-emerald-100 hover:fill-white hover:text-stone-500'>
          <Responsive styles='w-16 p-2 aspect-square fill-emerald-500 block mx-auto' />
          <p className='text-justify'>
            Proficient in creating responsive designs that seamlessly adapt to
            diverse devices and screen sizes. Expertise in fluid grids, flexible
            images, and media queries to ensure optimal user experience.
            Prioritizes mobile-first design and cross-browser compatibility.
          </p>
        </div>
        <div className='px-3 py-2 max-w-[25em] rounded-lg bg-gray-100 border-gray-300 shadow-md shadow-stone-300 min-h-[14em] transition-all duration-500 ease-in hover:bg-emerald-100 hover:fill-white hover:text-stone-500'>
          <FastDelivery styles='w-16 p-2 aspect-square fill-emerald-500 block mx-auto' />
          <p className='text-justify'>
            Efficiently delivers projects, meeting and exceeding targets with a
            swift turnaround. Ensures timely completion without compromising
            quality. Adopts a proactive approach to project management for rapid
            delivery. Consistently achieves project goals with a focus on speed
            and precision.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
