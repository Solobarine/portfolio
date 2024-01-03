import Socials from '../Components/Socials'

const Hero = () => {
  return (
    <div
      className='relative sm:pl-36 py-14 sm:py-20 bg-gradient-to-r h-screen max-h-[20em] sm:max-h-[35em] from-emerald-700 to-slate-600 text-gray-100 relative'
      id='hero'
    >
      <p>Hi, My Name is</p>
      <h1 className='text-2xl sm:text-5xl font-bold py-2 text-gray-400'>
        Solomon <span className='text-sky-500'>Akpuru</span>
      </h1>
      <h1 className='text-2xl sm:text-5xl font-bold sm:py-4 text-stone-400'>
        I build Full Stack Applications
      </h1>
      <small className='font-bold hidden sm:block'>
        I am a Software Developer adept in Creating Memorable Digital
        Experiences. <br /> Let's Build Something Today.
      </small>
      <Socials customStyles='py-6 text-gray-200 hidden sm:flex sm:flex-col sm:absolute sm:left-5 sm:top-1/2 sm:translate-y-[-50%]' />
      <div className='mt-5'>
        <a
          href='/downloadables/solly-resume.pdf'
          download
          className='bg-sky-500 block w-fit my-5 px-4 py-3 rounded-lg'
        >
          Download My Resume
        </a>
        <div
          className='contra-hire-me-button'
          data-analyticsUserId='19a46a54-c52f-45bf-bf5e-82d33b8f7eb7'
          data-theme='dark'
          data-username='solomon_akpuru'
        ></div>
      </div>
      <img
        src='/laptop-1.png'
        alt=''
        className='block w-28 mt-12 absolute bottom-6 w-3/12 right-0'
      />
    </div>
  )
}

export default Hero
