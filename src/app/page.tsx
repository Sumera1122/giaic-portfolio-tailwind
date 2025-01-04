import Hero from './components/hero/page'
import React from 'react'
import Skills from './components/skills/page'
import Experience from './components/experience/page'
import Projects from '../app/projects/page'
import Contact from './contact/page'
import About from './about/page'

const HomePage = () => {
  return (
    <div className='bg-black border-2-white'>
      
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      
      
    </div>
  )
}

export default HomePage
