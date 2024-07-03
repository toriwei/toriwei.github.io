export default function About() {
  return (
    <main>
      <h1 className='pt-4'>Some Things About Me</h1>
      <div className='flex flex-col md:flex-row px-16 md:space-x-12 space-y-12 md:space-y-0'>
        <div className='md:w-3/5 space-y-4 md:space-y-8'>
          <p>
            I recently graduated with a Bachelor of Science in Computer Science
            from Loyola Marymount University. I also completed a double minor in
            Studio Arts (graphic design emphasis) and Women's and Gender
            Studies.
          </p>
          <p>
            With experience gained through a full-stack engineering internship
            and an AI modeling research position, I am proficient in React,
            JavaScript, UI/UX design, AI, and databases.
          </p>
          <p>
            I have also held various teaching positions. For two years, I served
            as a teaching assistant for the Girls Who Code's Summer Immersion
            Program, introducing high school students to web development.
            Additionally, I tutored for LMU's CS department for three years,
            providing support in classes such as Intro to Programming and
            Discrete Math.
          </p>
          <p>Based in Los Angeles, California.</p>
        </div>
        <div className='w-2/3 md:w-1/3'>
          <img src='./tori.png' />
        </div>
      </div>
    </main>
  )
}
