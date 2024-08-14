import experiences from './experienceInfo'
export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className='experience-container flex flex-col sm:px-8 md:pl-16 md:pr-0  md:w-6/12'>
        {experiences.map((experience) => (
          <div key={experience.name} className='flex flex-col mb-8'>
            <div className='font-bold'>
              <h3>{experience.name}</h3>
              <p>{experience.subtitle}</p>
            </div>
            <div className=''>
              <ol className='list-disc'>
                {experience.bullets.map((bullet, index) => (
                  <li key={`${experience.name}-${index}`}>{bullet}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
