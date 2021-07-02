import { projectData } from '../data'
import placeholder from '../assets/placeholder.jpeg'

function Projects() {
 return (
  <section>
   <h2>PROJECTS</h2>
   {projectData.map((project) => {
    return (
     <div key={project.title}>
      <img src={placeholder}></img>
      <h3>{project.title}</h3>
      <p>{project.tech}</p>
      <p>{project.description}</p>
      <a href={project.demo}>SEE LIVE DEMO</a>
      <a href={project.github}>SEE GITHUB</a>
     </div>
    )
   })}
  </section>
 )
}

export default Projects
