export default function About() {
  return (
    <main>
      <h1 className='mt-2 md:mt-4'>About Me</h1>
      <div className='flex flex-col px-8 md:flex-row md:space-x-12 space-y-12 md:space-y-0'>
        <div className='md:w-7/12 space-y-4 md:space-y-8'>
          <p>
            I graduated with a BS in Computer Science from Loyola Marymount
            University in Spring 2024. While there, I also completed minors in
            Studio Arts and Women&#39;s and Gender Studies. Some of my favorite
            involvements include playing club soccer, being a campus tour guide,
            and serving as president of{' '}
            <a
              href='https://leo.lmu.edu/organization/gryphon-circle-service-organization'
              target='_blank'
              className='underline'
            >
              Gryphon Circle Service Organization
            </a>
            .
          </p>
          <p>
            I specialize in full-stack development but have hands-on experience
            with AI, database systems, and UI/UX design as well. As an engineer,
            I'm driven by solving complex problems, collaborating with others,
            and creating meaningful interactions with tech.
          </p>
          <p>
            Currently, I am open to software engineering roles in Los Angeles or
            remote.
          </p>
        </div>
        <div className='w-2/3 md:w-5/12'>
          <img src='./headshot.jpg' className='border-2 border-black' />
        </div>
      </div>
    </main>
  )
}
