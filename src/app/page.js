import Experience from './components/work/experience'
import Projects from './components/work/projects'
import Skills from './components/work/skills'

export default function Home() {
  return (
    <main>
      <div className='intro text-2xl md:text-3xl lg:text-5xl'>
        <div className='sm:px-8 md:pl-16 md:pr-16 mt-[5%] mb-0 md:mb-20 leading-snug'>
          <p>
            Hi, I&#39;m Tori. <br />I am a software engineer passionate about
            creating human-centered tech, dynamic design, and inclusive digital
            connection.
          </p>
        </div>
      </div>
      <Projects />
      <Experience />
      <Skills />
    </main>
  )
}
