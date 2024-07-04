'use client'
import { useState } from 'react'
import projects from './projectInfo'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])

  function handleProjectClick(project) {
    setActiveProject(project)
    console.log(project)
  }

  return (
    <div>
      <h1>Projects</h1>
      <div className='project-nav relative w-full flex max-h-48 border border-2 border-black'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='relative flex-grow flex text-center cursor-pointer'
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.displayPhoto}
              className='w-full max-h-full object-cover'
            ></img>
            <span
              className={`${
                project.name === activeProject.name
                  ? 'bg-palette-blue bg-opacity-90'
                  : 'bg-black bg-opacity-70'
              } absolute inset-0 flex items-center justify-center hover:bg-palette-blue hover:bg-opacity-60 text-white text-sm md:text-xl`}
            >
              {project.name}
            </span>
          </div>
        ))}
      </div>
      <div className='project-container px-4 sm:px-8 md:px-16 sm:mt-4'>
        <div className='project-photos flex flex-col sm:flex-row my-4 sm:my-8 sm:max-h-64 space-y-4 sm:space-y-0 sm:space-x-4'>
          {activeProject.photos.map((photo) => (
            <div key={photo} className='flex'>
              <img
                key={photo}
                src={photo}
                className={`border-2 border-black object-cover w-full`}
              ></img>
            </div>
          ))}
        </div>
        <h2>{activeProject.name}</h2>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col w-1/1 md:w-2/4'>
            <div className='flex flex-wrap'>
              {activeProject.links.map((link) => (
                <span key={`${activeProject}-${link.site}`}>
                  <a
                    key={`${activeProject.name} ${link.site}`}
                    href={link.url}
                    className='underline'
                    target='_blank'
                  >
                    {link.site}
                  </a>
                  <span>&nbsp;{'/'}&nbsp;</span>
                </span>
              ))}
              <span>{activeProject.date}</span>
            </div>
            <p className='mt-4'>{activeProject.description}</p>
          </div>
          <div className='flex flex-col mt-4 md:mt-0 w-1/1 md:w-1/4 mt-2'>
            <h2>Tech Stack</h2>
            <p>{activeProject.techStack.join(' / ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
