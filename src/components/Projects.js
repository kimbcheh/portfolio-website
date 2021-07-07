function Projects({ projectData }) {
 return (
  <section className='bottom-border'>
   <h2>
    PROJECTS <span className='symbol'>&#x2193;</span>
   </h2>
   {projectData.map((project) => {
    return (
     <div key={project.title} className='project'>
      <img
       src={require(`../assets/${project.image}`).default}
       alt={`Screenshot of ${project.title}`}
      ></img>
      <h3>{project.title}</h3>
      <p className='project-tech'>[ {project.tech} ]</p>
      <p className='project-desc'>{project.description}</p>
      <p className='project-links'>
       SEE THE <a href={project.demo}>LIVE DEMO</a>&#x2197; AND THE{' '}
       <a href={project.github}>CODE ON GITHUB</a>&#x2197;
      </p>
     </div>
    )
   })}
  </section>
 )
}

export default Projects
