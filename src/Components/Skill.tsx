import React from 'react'

const Skill = ({
  name,
  icon,
  image,
}: {
  name: string
  icon?: string
  image?: string
}) => {
  return (
    <div className='flex items-center gap-2 p-2 rounded-md'>
      {icon ? (
        <i className={`${icon} text-4xl`}></i>
      ) : (
        <img src={image} alt={name} className='h-12' />
      )}
      <p className='text-lg'>{name}</p>
    </div>
  )
}

export default Skill
