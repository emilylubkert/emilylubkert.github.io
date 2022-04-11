function ProjectCard({image, description, title, githublink, launchlink}) {

    return (
        <div class="col">
        <div class="card shadow-sm h-100">
          <img class="card-img-top" src={image} width="100%"/>
          <div class="card-body d-flex flex-column justify-content-between">
            <div class="project-info"><h3 class="card-title">{title}</h3>
            <p class="card-text">{description}</p>
          </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href={launchlink} target="_blank"><button  type="button" class="btn btn-sm btn-outline-secondary mt-auto">Launch Project</button></a>
                <a href={githublink} target="_blank"><button type="button" class="btn btn-sm btn-outline-secondary mt-auto">View on GitHub</button>                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectCard;