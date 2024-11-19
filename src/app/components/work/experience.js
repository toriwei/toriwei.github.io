import experiences from './experienceInfo'
export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className='experience-container flex flex-col sm:px-8 px-8 md:grid md:grid-cols-3 md:gap-y-8 md:gap-x-16'>
        {experiences.map((experience) => (
          <div key={experience.name} className='flex flex-col mb-8'>
            <div className='font-bold'>
              <h3>{experience.name}</h3>
              <p>{experience.subtitle}</p>
            </div>
            <div className=''>
              <ol className='list-disc space-y-2'>
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
