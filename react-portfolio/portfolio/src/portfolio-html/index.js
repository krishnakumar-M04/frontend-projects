import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import './Nav.css'
export default function index() {
  return (
  <>
     <Header/>
     <Home/>
     <About/>
     <Education/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
  </>
  )
}
