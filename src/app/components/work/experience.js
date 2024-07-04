import experiences from './experienceInfo'
export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className='experience-container flex md:flex-row flex-col md:space-x-12'>
        {experiences.map((experience) => (
          <div
            key={experience.name}
            className='flex flex-col mb-8 md:mb-0 md:w-1/4'
          >
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
