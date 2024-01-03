import Project from '../Components/Project'
import fullstack from '../Data/Projects/fullstack'
import frontend from '../Data/Projects/frontend'

const Works = () => {
  return (
    <section className='sm:px-3 pt-16' id='projects'>
      <h2 className='text-3xl font-bold text-center p-2 py-6 mb-2'>
        Best Works
      </h2>
      <div>
        {fullstack.map((data, index) => (
          <Project
            key={index}
            data={data}
            index={index}
            posStyle={`${index % 2 !== 0 ? '' : ''}`}
          />
        ))}
        {frontend.map((data, index) => (
          <Project
            key={index}
            index={index}
            data={data}
            posStyle={`${index % 2 !== 0 ? '' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Works
