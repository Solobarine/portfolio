import React from 'react'

interface ExperienceProps {
  id: number
  company: string
  logo: string
  dateStarted: string
  dateEnded: string
  location: string
  jobTitle: string
  highlights: string[]
}

const Position = ({ data }: { data: ExperienceProps }) => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap px-2 items-start gap-2 w-full'>
      <img
        src={data.logo}
        alt={data.company}
        className='w-12 aspect-square rounded-full bg-emerald-100'
      />
      <div className='rounded-lg bg-gray-100 py-6 px-3 transition-all duration-500 ease-in hover:bg-emerald-200 hover:shadow-md grow'>
        <h2 className='text-lg font-bold'>{data.company}</h2>
        <div className='flex items-center justify-between py-2 gap-3'>
          <p>
            {data.dateStarted} - {data.dateEnded}
          </p>
          <p className='font-bold'>{data.location}</p>
        </div>
        <p className='font-bold pb-2'>{data.jobTitle}</p>
        <ul className='list-disc list-inside grid gap-2 text-sm'>
          {data.highlights.map(highlight => (
            <li key={highlight} className='text-justify'>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Position
