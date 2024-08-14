'use client'
import React, { useState } from 'react'
import skills from './skillsInfo'

const skillColors = {
  language: { main: 'bg-palette-pink', complement: '#343CE7' },
  framework: { main: 'bg-palette-green', complement: '#FCB1CD' },
  tool: { main: 'bg-palette-blue', complement: '#B9ED26' },
}

export default function Skills() {
  const [cursor, setCursor] = useState('auto')

  const handleMouseEnter = (color) => {
    const encodedSVG = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" width="20px" height="20px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>`
    )
    const cursorSvg = `url('data:image/svg+xml;utf8,${encodedSVG}') 10 10, auto`
    setCursor(cursorSvg)
  }

  const handleMouseLeave = () => {
    setCursor('auto')
  }
  return (
    <div>
      <h1>Skills</h1>
      <div className='skills-container flex flex-wrap justify-between text-md sm:text-2xl space-x-2 sm:px-8 md:pl-16'>
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`${[skillColors[skill.type].main]} ${
              skill.type === 'tool' ? 'text-white' : ''
            } rounded-full px-6 sm:px-8 py-2 mb-4 cursor-custom`}
            onMouseEnter={() =>
              handleMouseEnter(skillColors[skill.type].complement)
            }
            onMouseLeave={() => handleMouseLeave}
            style={{ cursor }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}
