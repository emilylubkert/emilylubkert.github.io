import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProjectCard from './ProjectCard';
import Bio from './Bio';

function Home() {
  const articleLink1 =
    'https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/';
  const articleLink2 =
    'https://medium.com/javascript-in-plain-english/coding-wont-exist-in-5-years-this-is-why-6da748ba676c';
  const articleLink3 =
    'https://kappanonline.org/de-escalating-dataveillance-in-schools-nichols-monea/?utm_source=PDK+International&utm_campaign=70c5f44748-Kappan_Newsletter_Lapsed_2_25_2020_COPY_01&utm_medium=email&utm_term=0_867590cd6a-70c5f44748-34897089&mc_cid=70c5f44748&mc_eid=23276d0b4d';

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
          <Image fluid rounded src="/desk_photo.jpg" alt="Emily at desk"/>
          <h1 className='name-header'>Emily Lubkert, Full Stack Developer</h1>
        </div>
        <div
          className='col-lg-6 col-md-8 mx-auto'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ marginTop: '5rem' }}>
            <Card
              style={{
                textAlign: 'center',
                fontSize: 'x-large',
                background: 'none',
                border: 'none',
              }}
            >
              <Card.Body>
                <Card.Title>Welcome!</Card.Title>
                I'm so glad you're here! <br />
                Check out my projects to see my skills in action. <br />
                Contact me and let me know what you think.
              </Card.Body>
            </Card>
            <Card
              style={{
                marginTop: '3rem',
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
                <Card.Link href={articleLink1}>
                  What Is ChatGPT Doing … and Why Does It Work?
                </Card.Link>
                <Card.Link href={articleLink2}>
                  Coding Won’t Exist In 5 Years. This Is Why
                </Card.Link>
                <Card.Link href={articleLink3}>
                  De-escalating ‘dataveillance’ in schools
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <h1 className='header-text'>My Skills</h1>
          <h2 className='header-text'>MERN Stack</h2>
          <Card className='card--skills'>
            <ListGroup variant='flush'>
              <ListGroup.Item
                style={{ fontSize: 'x-large', textAlign: 'center' }}
              >
                MongoDB
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: 'x-large', textAlign: 'center' }}
              >
                Express
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: 'x-large', textAlign: 'center' }}
              >
                ReactJS
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: 'x-large', textAlign: 'center' }}
              >
                Node.js
              </ListGroup.Item>
            </ListGroup>
          </Card>
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
                  Git/GitHub
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
          image='./oinc-logo.png'
          title='OIN¢'
          description='OIN¢ is a full stack money tracking app that kids and their parents can use to keep track of the money coming in and out.'
          launchlink='https://emily-lubkert-fullstackbankapp.herokuapp.com/'
          githublink='https://github.com/emilylubkert/Oinc-Full-Stack-Banking-App'
        />
        <ProjectCard
          image='./bustracker.jpeg'
          title='Real-Time Bus Tracker'
          description='Real-time transit data from the MBTA is shown on a map of Boston. Users can input a bus route and view the current location of each active bus on that route, updated every 5 seconds.'
          launchlink='https://emilylubkert.github.io/Real-Time-Bus-Tracker/'
          githublink='https://github.com/emilylubkert/Real-Time-Bus-Tracker'
        />
        <ProjectCard
          image='./rest-app.png'
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
