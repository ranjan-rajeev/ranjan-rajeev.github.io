import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './styles/index.css'

export default function App() {
  return (
    <div className="app-root">
      <Hero />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}
