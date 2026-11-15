export default function Home() {
  return (
    <main className='max-w-2xl mx-auto p-8'>
      <div className='header pb-8'>
        <div className='flex flex-col gap-y-4'>
          <img
            className='rounded-full w-32 h-32 object-contain'
            src='tori.JPG'
            alt='Photo of Tori'
          />
          <h1 className='text-5xl pb-2'>Tori Wei</h1>
        </div>
        <p>
          Hello, my name is Tori! I am software engineer at Fivetran. I build
          data engineering tools that help teams manage reliable and efficient
          data workflows. Currently, I am based in Los Angeles, California.
        </p>
      </div>
      <div className='main-body flex flex-col gap-y-8'>
        <div id='experience-section'>
          <h2 className='text-2xl pb-1'>Experience</h2>
          <div className='section-body flex flex-col gap-y-4'>
            <div className='section-item'>
              <h3>Fivetran</h3>
              <p className='text-stone-600'>
                Builds dbt State, a feature that skips redundant executions
                during data transformation
              </p>
            </div>
            <div className='section-item'>
              <h3>Tobiko Data (acquired by Fivetran)</h3>
              <p className='text-stone-600'>
                Developed the frontend experience for Tobiko Cloud, an
                enterprise observability and orchestration platform for SQLMesh
              </p>
            </div>
            <div className='section-item'>
              <h3>Paramount</h3>
              <p className='text-stone-600'>
                Implemented frontend features for CBS News app on smart-TV
                platforms.
              </p>
            </div>
          </div>
        </div>
        <div id='projects-section'>
          <h2 className='text-2xl pb-1'>Projects</h2>
          <div className='section-body flex flex-col gap-y-4'>
            <div className='section-item'>
              <h3>
                <a
                  href='https://github.com/toriwei/nwslink'
                  className='underline hover:text-pink-700'
                  target='_blank'
                  rel='relation_name'
                >
                  NWSLink
                </a>
              </h3>
              <p className='text-stone-600'>
                A database and guessing game for players in the National
                Women&apos;s Soccer League
              </p>
            </div>
            <div className='section-item'>
              <h3>
                {' '}
                <a
                  href='https://github.com/toriwei/the-living-archive'
                  className='underline hover:text-pink-700'
                  target='_blank'
                  rel='relation_name'
                >
                  The Living Archive
                </a>
              </h3>
              <p className='text-stone-600'>
                An interactive map and content management system to preserve
                community stories at Loyola Marymount University
              </p>
            </div>
          </div>
        </div>
        <div id='education-section'>
          <h2 className='text-2xl pb-1'>Education</h2>
          <div className='section-item'>
            <h3>
              Loyola Marymount University 2020{'\u2013'}
              2024
            </h3>
            <p className='text-stone-600'>
              B.S. Computer Science; Minors in Studio Arts, Women&apos;s and
              Gender Studies
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
