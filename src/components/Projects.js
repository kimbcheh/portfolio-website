import { projectData } from '../data'
import placeholder from '../assets/placeholder.jpeg'

function Projects() {
 return (
  <section className='bottom-border'>
   <h2>
    &#x2736; PROJECTS <span className='symbol'>&#x2193;</span>
   </h2>
   {projectData.map((project) => {
    return (
     <div key={project.title} className='project'>
      <img src={placeholder}></img>
      <h3>{project.title}</h3>
      <p className='project-tech'>{project.tech}</p>
      <p className='project-desc'>{project.description}</p>
      <span className='symbol'>&#x2192;</span>{' '}
      <a href={project.demo}>SEE LIVE DEMO</a>
      <br />
      <span className='symbol'>&#x2192;</span>{' '}
      <a href={project.github}>SEE GITHUB</a>
     </div>
    )
   })}
  </section>
 )
}

export default Projects
