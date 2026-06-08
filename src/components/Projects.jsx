import React from 'react'

const SAMPLE_PROJECTS = [
  { id: 1, title: 'Portfolio Site', desc: 'This site — built with React and deployed to GitHub Pages.' },
  { id: 2, title: 'Project Two', desc: 'Another example project.' },
]

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="project-grid">
        {SAMPLE_PROJECTS.map(p => (
          <article key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
