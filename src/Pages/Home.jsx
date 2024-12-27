import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Getintouch from '../Components/Getintouch'
import Thanks from "../Components/Thanks"

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Getintouch />
        <Thanks />
    </div>
  )
}

export default Home