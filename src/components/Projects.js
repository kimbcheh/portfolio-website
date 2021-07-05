import { projectData } from '../data'
import placeholder from '../assets/placeholder.jpeg'

function Projects() {
 return (
  <section className='bottom-border'>
   <h2>PROJECTS</h2>
   {projectData.map((project) => {
    return (
     <div key={project.title} className='project'>
      <img src={placeholder}></img>
      <h3>{project.title}</h3>
      <p className='project-tech'>{project.tech}</p>
      <p className='project-desc'>{project.description}</p>
      <a href={project.demo}>SEE LIVE DEMO</a>
      <br />
      <a href={project.github}>SEE GITHUB</a>
     </div>
    )
   })}
  </section>
 )
}

export default Projects
