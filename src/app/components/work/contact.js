export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className='contact-container flex flex-col sm:px-8 md:px-16'>
        <p className='mb-2'>Want to say &#8216;hi&#8217; back?</p>
        <div className='underline flex flex-col'>
          <a target='_blank' href='mailto:toriwei26@gmail.com'>
            Email
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/tori-wei/'>
            LinkedIn
          </a>
          <a target='_blank' href='https://github.com/toriwei'>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
