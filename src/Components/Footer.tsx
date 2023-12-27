import React from 'react'
import Socials from './Socials'

const Footer = () => {
  const date = new Date()
  return (
    <footer className='p-2 py-12 bg-emerald-300'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <p className='text-xl font-bold text-stone-500 text-justify'>
          Solomon Akpuru
        </p>
        <Socials />
      </div>
      <p className='text-center mt-10'>
        CopyRight &copy; {date.getFullYear()} Solomon Akpuru. All Rights
        Reserved
      </p>
    </footer>
  )
}

export default Footer
