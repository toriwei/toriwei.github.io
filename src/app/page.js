import Experience from './components/work/experience'
import Projects from './components/work/projects'
import Skills from './components/work/skills'

export default function Home() {
  return (
    <main>
      <div className='intro text-4xl lg:text-5xl'>
        <div className='mx-[15%] mt-[5%] mb-[7%] leading-snug'>
          <p>
            Hi, I'm Tori. <br />I am a software engineer passionate about
            creating human-centered tech, dynamic design, and inclusive digital
            connections.
          </p>
        </div>
      </div>
      <Projects />
      <Experience />
      <Skills />
    </main>
  )
}
