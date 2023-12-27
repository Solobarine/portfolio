import School from '../Components/School'
import education from '../Data/education'

const Education = () => {
  return (
    <div className='pt-12' id='education'>
      <h2 className='text-3xl font-bold text-center py-6'>Education</h2>
      <div className='education flex items-start justify-center flex-wrap gap-4'>
        {education.map(data => (
          <School key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Education
