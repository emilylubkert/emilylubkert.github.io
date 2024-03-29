function ProjectCard({ image1, image2, description, title, githublink, launchlink }) {
  return (
    <div className='col'>
      <div className='card shadow-sm h-100'>
        <img className='card-img-top' src={image1} width='100%' />
        {image2 ? <img className='card-img-top' src={image2} width='100%' /> : null}
        <div className='card-body d-flex flex-column justify-content-between'>
          <div className='project-info'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-text'>{description}</p>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              {launchlink ? (<><a href={launchlink} target='_blank'>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary mt-auto'
                >
                  Launch Project
                </button>
              </a></>) : null}
              {githublink ? (<a href={githublink} target='_blank'>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary mt-auto'
                >
                  View on GitHub
                </button>
              </a>) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
