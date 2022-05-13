import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Bio from './Bio'

function Home() {
  return (
    <>
      <div className='row py-lg-5'>
      <h1 className='name-header'>Emily Lubkert, full stack developer</h1>
        <div className='col-lg-6 col-md-8 mx-auto' style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ marginTop: '5rem' }}>
            <h1 className='header-text'>Welcome</h1>
            <p style={{ textAlign: 'center', fontSize: 'xx-large' }}>
              I'm so glad you're here! <br />
              Check out my projects to see my skills in action. <br />
              Contact me and let me know what you think.
            </p>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <h1 className='header-text'>My Skills</h1>
          <h2 className='header-text'>MERN Stack</h2>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem style={{ fontSize: 'x-large', textAlign: 'center' }}>
                MongoDB
              </ListGroupItem>
              <ListGroupItem style={{ fontSize: 'x-large', textAlign: 'center' }}>
                Express
              </ListGroupItem>
              <ListGroupItem style={{ fontSize: 'x-large', textAlign: 'center' }}>
                ReactJS
              </ListGroupItem>
              <ListGroupItem style={{ fontSize: 'x-large',textAlign: 'center' }}>
                Node.js
              </ListGroupItem>
            </ListGroup>
          </Card>
          <h3 className='header-text' style={{ margin: '20px 0 10px' }}>
            Other Skills + Tools
          </h3>
          <div className='skills-group'>
            <Card>
              <ListGroup
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
                variant='flush'
              >
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Write & document RESTful APIs
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  AWS
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Docker
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Firebase
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Formik
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Git/GitHub
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  GraphQL
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Heroku
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Mongoose
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Postman
                </ListGroupItem>
                <ListGroupItem style={{ textAlign: 'center' }}>
                  Strapi
                </ListGroupItem>
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
      <Bio/>
    </>
  );
}

export default Home;
