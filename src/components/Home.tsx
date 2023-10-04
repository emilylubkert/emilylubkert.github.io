import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProjectCard from './ProjectCard';
import Bio from './Bio';

function Home() {

  const text = "I am a Full Stack Developer with a background in education and school leadership. ";
  const currently = "I work as a software engineer at ";
  const orgLink = {name: "HMH.", link: "https://www.hmhco.com/"};

  const articles = [
    {
      title: " 'Building Meta’s Threads App' (and more from The Pragmatic Engineer!)",
      url: 'https://newsletter.pragmaticengineer.com/p/building-the-threads-app'},
    {
      title: 'The Role of AI in Software Engineering in 2023',
      url: 'https://medium.com/tech-lead-hub/the-role-of-ai-in-software-engineering-in-2023-where-is-the-tech-industry-heading-87185022dffa'
    },
    {
      title: 'Create React App is out, these are the tools you need to switch to now',
      url: 'https://medium.com/coding-beauty/create-react-app-alternatives-f4b65322acab'
    }
  ]
  const date = new Date();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    date
  );
  const year = date.getFullYear();
  const updateMonth = `${month} ${year}`;
  return (
    <>
      <div className='row py-lg-5'>
        <div className='header-container'>
          {/* <img className='image' src='./desk_photo.jpg' alt='Emily at desk' /> */}
          <Image fluid rounded src="/desk_photo.jpg" alt="Emily at desk" />
          <div>
          <h1 className='name-header'>Emily Lubkert, Full Stack Developer</h1>
          <p className='bio-text' style={{textAlign: 'center', padding: '0 5%'}}>{text}{currently}<a style={{display: 'inline', padding: 0}} href={orgLink.link} target='_blank'>{orgLink.name}</a></p>
          </div>
        </div>
        <div
          className='col-lg-6 col-md-8 mx-auto'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div>
            <Card
              style={{
                // marginTop: '6rem',
                textAlign: 'center',
                fontSize: 'large',
                background: 'none',
                border: 'none',
              }}
            >
              <Card.Body>
                <Card.Title>
                  {updateMonth}: Click to see what I've been reading...
                </Card.Title>
                {
                  articles.map((item, index) => {
                    return (
                      <Card.Link key={index} href={item.url}>
                        {item.title}
                      </Card.Link>
                    )
                  })
                }
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <h1 className='header-text'>Primary Languages</h1>
          <div className='skills-group'>
            <Card className='card--skills'>
              <ListGroup
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
                variant='flush'
              >
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  ReactJS
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  NodeJS
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  ExpressJS
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  MongoDB
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Javascript / Typescript
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  CSS
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  HTML
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Vue.js
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  C#
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  .NET
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  SQL
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <h3 className='header-text' style={{ margin: '20px 0 10px' }}>
            Other Skills + Tools
          </h3>
          <div className='skills-group'>
            <Card className='card--skills'>
              <ListGroup
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
                variant='flush'
              >
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  RESTful APIs
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  AWS
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Docker
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Firebase
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Formik
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Git
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  GraphQL
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Heroku
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Mongoose
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Postman
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Python
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  R / R Studio
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Strapi
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: 'center' }}>
                  Stripe
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
      <div className='row py-lg-5'>
        <h1 className='header-text'>My Projects</h1>
        <ProjectCard
          image1='./home-page-blur.png'
          image2='./college-search-blur.png'
          title='NWEA Futures Tool'
          description="A functional prototype for an updated redesign on NWEA's College Explorer Tool with increased personalization, accessibility, and beauty. Due to privacy reasons, I cannot share more details or code for this project, but I would be happy to tell you more about it! "
        />
        <ProjectCard
          image1='./oinc-logo.png'
          title='OIN¢'
          description='OIN¢ is a full stack money tracking app that kids and their parents can use to keep track of the money coming in and out.'
          launchlink='https://emily-lubkert-fullstackbankapp.herokuapp.com/'
          githublink='https://github.com/emilylubkert/Oinc-Full-Stack-Banking-App'
        />

        <ProjectCard
          image1='./rest-app.png'
          title='Full Stack Restaurant App'
          description='A mock restaurant ordering app built with NextJS, Stripe, and Strapi. A user can log in, add items from 3 different restaurants to a cart, and order with Stripe using test payment settings/information.'
          githublink='https://github.com/emilylubkert/full-stack-restaurant-app'
        />
      </div>
      <Bio />
    </>
  );
}

export default Home;
