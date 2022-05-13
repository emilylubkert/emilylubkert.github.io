function ContentCard({ image, description, title, contentLink }) {
    return (
      <div className='col'>
        <div className='card shadow-sm h-100'>
          <img className='card-img-top' src={image} alt='project' />
          <div className='card-body d-flex flex-column justify-content-between'>
            <div className='project-info'>
              <h3 className='card-title'>{title}</h3>
              <p className='card-text'>{description}</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <a href={contentLink} target='_blank' rel="noreferrer">
                    <button
                      type='button'
                      className='btn btn-sm btn-outline-secondary mt-auto'
                    >
                      View on GitHub
                    </button>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContentCard;