import Experience from './components/work/experience'
import Projects from './components/work/projects'
import Skills from './components/work/skills'

export default function Home() {
  return (
    <main>
      <div className='intro text-2xl md:text-3xl lg:text-5xl'>
        <div className='px-8 mt-[5%] mb-0 md:mb-32 leading-snug'>
          <p>
            Hi, I&#39;m Tori. <br />I am a software engineer keen on
            human-centered tech, design, and digital connection.
          </p>
        </div>
      </div>
      <Projects />
      <Experience />
      <Skills />
    </main>
  )
}
