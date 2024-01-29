const Socials = ({ customStyles }: { customStyles?: string }) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-end gap-4 grow-[999999] ${customStyles}`}
    >
      <a href='https://linkedin.com/in/solomon-akpuru' target='_blank'>
        <i className='fa-brands fa-linkedin text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
      <a href='https://github.com/solobarine' target='_blank'>
        <i className='fa-brands fa-square-github text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
      <a
        href='https://www.upwork.com/freelancers/~01d7b0469a7602559b'
        target='_blank'
      >
        <i className='fa-brands fa-upwork text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
      <a href='https://twitter.com/SolomonAkpuru' target='_blank'>
        <i className='fa-brands fa-square-x-twitter text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
      <a href='mailto:solobarine@gmail.com' target='_blank'>
        <i className='fa-brands fa-google text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
      <a href='https://wellfound.com/u/solomon-akpuru' target='_blank'>
        <i className='fa-brands fa-angellist text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
      <a href='https://contra.com/solomon_akpuru' target='_blank'>
        <i className='fa-solid fa-earth-europe text-xl transition duration-500 hover:text-green-900 hover:scale-125'></i>
      </a>
    </div>
  )
}

export default Socials
