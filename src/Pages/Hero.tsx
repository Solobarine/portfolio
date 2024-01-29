import Socials from '../Components/Socials'

const Hero = () => {
  return (
    <div
      className='relative py-10 px-2 sm:pl-32 min-h-[70dvh] sm:min-h-screen'
      id='hero'
    >
      <div className='z-10 mt-[15em] sm:mt-0'>
        <h1 className='text-2xl sm:text-3xl font-bold py-2 text-stone-600'>
          Hello, I'm <br />
          Solomon <span className='text-sky-500'>Akpuru</span>
        </h1>
        <h1 className='text-2xl sm:text-3xl font-bold text-stone-600'>
          I build Full Stack Applications
        </h1>
        <small className='font-bold sm:block text-emerald-600 text-xl pt-4'>
          I am a Software Developer adept in Creating Memorable Digital
          Experiences. <br /> Let's Build Something Today.
        </small>
        <div className='mt-5 flex items-center gap-3'>
          <a
            href='/downloadables/solly_resume.pdf'
            download
            className='bg-sky-500 block w-fit my-5 px-4 py-3 rounded-lg'
          >
            Download My Resume
          </a>
          <div
            className='contra-hire-me-button'
            data-analyticsuserid='19a46a54-c52f-45bf-bf5e-82d33b8f7eb7'
            data-theme='dark'
            data-username='solomon_akpuru'
          ></div>
        </div>
      </div>
      <Socials customStyles='z-20 sm:absolute sm:left-7 sm:top-0 sm:flex sm:flex-col sm:min-h-screen sm:justify-center gap-2' />
      <img
        src='/logo.png'
        alt=''
        className='block absolute right-0 -z-10 top-[0%] w-full max-w-[40em] right-0'
      />
      <div className='bg-gray-200 absolute -z-20 inset-0'></div>
    </div>
  )
}

export default Hero
