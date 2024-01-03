import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Technology from './Technology'
import { slidingVariant } from '../Utils/variants'

interface ProjectProps {
  id: number
  name: string
  description: string
  features: string[]
  images: string[]
  languages: { name: string; icon?: string; image?: string }[]
  frameworksAndTools: { name: string; icon?: string; image?: string }[]
  links: { name: string; link: string }[]
}

const Project = ({
  data,
  index,
  posStyle,
}: {
  data: ProjectProps
  index: number
  posStyle: string
}) => {
  const [imageIndex, setImageIndex] = useState(0)
  const next = () => {
    setImageIndex(imageIndex + 1)
    if (imageIndex === data.images.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  const prev = () => {
    setImageIndex(imageIndex - 1)
    if (imageIndex === 0) {
      setImageIndex(data.images.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }

  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    console.log(inView)

    if (inView) {
      controls.start('visible')
    }
    console.log(inView)
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={slidingVariant()}
      initial='initial'
      animate={controls}
      className={`project mx-auto mb-10 flex flex-wrap items-center w-fit gap-2 max-w-[50em] transition-all duration-500 ease-in bg-gray-100 shadow-gray-400 shadow-lg hover:shadow-emerald-300 mb-6 border border-gray-300 rounded-lg ${posStyle}`}
    >
      <div className='projectCaurosel'>
        <div className='relative aspect-video bg-stone-300 w-full'>
          {data.images.map((image, index) => (
            <img
              src={image}
              alt={`image content-${image}`}
              key={index}
              className={`${
                index === imageIndex
                  ? 'scale-100 absolute z-20'
                  : 'scale-0 absolute z-0'
              } w-full aspect-video transition-all duration-500 ease-in object-cover`}
            />
          ))}
          <i
            className='fa-solid fa-chevron-left z-30 text-3xl absolute left-1 top-1/2 translate-y-[-50%] cursor-pointer text-emerald-500'
            onClick={prev}
          ></i>
          <i
            className='fa-solid fa-chevron-right z-30 text-3xl absolute right-1 top-1/2 translate-y-[-50%] cursor-pointer text-emerald-500'
            onClick={next}
          ></i>
        </div>
        <div className='flex items-center flex-wrap py-2 justify-center gap-4'>
          <a
            href={data.links[0].link}
            className='text-lg flex items-center py-2 px-3 gap-2 whitespace-nowrap bg-emerald-300 rounded-lg'
          >
            <i className='fa-solid fa-cloud'></i>
            {data.links[0].name}
          </a>
          <a
            href={data.links[1].link}
            className='text-lg flex items-center py-2 px-3 gap-2 whitespace-nowrap bg-gray-300 rounded-lg'
          >
            <i className='fa-brands fa-github'></i>
            {data.links[1].name}
          </a>
        </div>
      </div>
      <div className='projectDetails grow px-2 pt-4'>
        <h3 className='text-xl font-bold pb-2'>{data.name}</h3>
        <p>{data.description}</p>
        <div>
          <div>
            <h4 className='text-base font-bold py-4'>Features</h4>
            <div className='flex flex-wrap items-center gap-2 max-w-[30em]'>
              {data.features.map(feature => (
                <p
                  key={feature}
                  className='text-xs p-2 rounded-md bg-emerald-200 whitespace-nowrap'
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
          <h4 className='text-base font-bold py-4'>Languages</h4>
          <div className='flex items-center p-2 pl-4 gap-6 flex-wrap'>
            {data.languages.map((language, index) =>
              language.icon ? (
                <Technology
                  name={language.name}
                  icon={language.icon}
                  keyId={index}
                />
              ) : (
                <Technology
                  name={language.name}
                  imagePath={language.image}
                  keyId={index}
                />
              )
            )}
          </div>
        </div>
        <div className='my-4'>
          <h4 className='text-base font-bold py-3'>Frameworks and Libraries</h4>
          <div className='flex items-center p-2 max-w-[30em] gap-6 flex-wrap'>
            {data.frameworksAndTools.map((language, index) =>
              language.icon ? (
                <Technology
                  name={language.name}
                  icon={language.icon}
                  keyId={index}
                />
              ) : (
                <Technology
                  name={language.name}
                  imagePath={language.image}
                  keyId={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
