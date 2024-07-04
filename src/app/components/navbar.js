export default function Navbar() {
  return (
    <nav className='pb-2 border-solid border-black border-b-2 text-lg'>
      <div className='flex flex-row justify-between'>
        <a href='./'>Tori Wei</a>
        <div className='flex flex-row space-x-12'>
          <a href='./'>Work</a>
          <a href='./about'>About</a>
        </div>
      </div>
    </nav>
  )
}
