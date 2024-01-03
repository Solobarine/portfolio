import { motion, useAnimation, useInView } from 'framer-motion'
import { slidingVariant } from '../Utils/variants'
import { useEffect, useRef } from 'react'

interface SchoolProps {
  id: number
  institution: string
  logo: string
  dateStarted: string
  dateEnded: string
  location: string
  course: string
  degree: string
  highlights: string[]
}

const School = ({ data, index }: { data: SchoolProps; index: number }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [ref, inView])

  return (
    <motion.div
      ref={ref}
      variants={slidingVariant()}
      initial='initial'
      animate={controls}
      className='flex flex-wrap sm:flex-nowrap px-2 items-start gap-2 w-full'
    >
      <img
        src={data.logo}
        alt={data.institution}
        className='w-12 aspect-square shrink-0 rounded-full bg-emerald-100'
      />
      <div className='p-2 rounded-lg bg-gray-100 px-3 py-6 grow transition-all duration-500 ease-in hover:bg-emerald-200 hover:shadow-md'>
        <h2 className='text-lg font-bold'>{data.institution}</h2>
        <div className='flex flex-wrap items-center justify-between py-2'>
          <p>
            {data.dateStarted} - {data.dateEnded}
          </p>
          <p className='font-bold'>{data.location}</p>
        </div>
        <p className='font-bold pb-2'>{data.course}</p>
        <p className='font-bold pb-2'>{data.degree}</p>
        <ul className='list-disc list-inside grid gap-2 text-sm'>
          {data.highlights.map(highlight => (
            <li key={highlight} className='text-justify'>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default School
