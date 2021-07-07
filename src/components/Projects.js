function Projects({ projectData }) {
 return (
  <section className='bottom-border'>
   <h2>PROJECTS &#x2193;</h2>
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
       SEE THE <span className='project-arrow'>&#8594; </span>
       <a href={project.demo}>LIVE DEMO</a> AND THE{' '}
       <span className='project-arrow'>&#8594; </span>
       <a href={project.github}>SOURCE CODE</a>
      </p>
     </div>
    )
   })}
  </section>
 )
}

export default Projects
