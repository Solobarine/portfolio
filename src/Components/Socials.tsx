const Socials = ({ customStyles }: { customStyles?: string }) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-end gap-4 grow-[999999] ${customStyles}`}
    >
      <a href='https://linkedin.com/in/solomon-akpuru' target='_blank'>
        <i className='fa-brands fa-linkedin text-xl'></i>
      </a>
      <a href='https://github.com/solobarine' target='_blank'>
        <i className='fa-brands fa-square-github text-xl'></i>
      </a>
      <a href='https://twitter.com/SolomonAkpuru' target='_blank'>
        <i className='fa-brands fa-square-x-twitter text-xl'></i>
      </a>
      <a href='mailto:solobarine@gmail.com' target='_blank'>
        <i className='fa-brands fa-google text-xl'></i>
      </a>
      <a href='https://wellfound.com/u/solomon-akpuru' target='_blank'>
        <i className='fa-brands fa-angellist text-xl'></i>
      </a>
      <a href='https://contra.com/solomon_akpuru' target='_blank'>
        <i className='fa-solid fa-earth-europe text-xl'></i>
      </a>
    </div>
  )
}

export default Socials
