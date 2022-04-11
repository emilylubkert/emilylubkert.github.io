import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

function Home() {
  return (
    <>
      <div className='row py-lg-5'>
        <div className='col-lg-6 col-md-8 mx-auto'>
          <div style={{ marginTop: '5rem' }}>
          <h1 className='header-text'>Welcome</h1>
          <p style={{ textAlign: 'center', fontSize: 'xx-large' }}>
            I'm so glad you're here! <br/>I'm Emily Lubkert and I'm a full-stack
            developer. <br/>Check out my projects to see my skills in action. Contact
            me and let me know what you think.
          </p>
          </div>
        </div>
        <div className='col-lg-6 col-md-8'>
          <h1 className='header-text'>My Skills</h1>
          <h2 className='header-text'>MERN Stack</h2>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem style={{ textAlign: 'center' }}>
                MongoDB
              </ListGroupItem>
              <ListGroupItem style={{ textAlign: 'center' }}>
                Express
              </ListGroupItem>
              <ListGroupItem style={{ textAlign: 'center' }}>
                ReactJS
              </ListGroupItem>
              <ListGroupItem style={{ textAlign: 'center' }}>
                Node.js
              </ListGroupItem>
            </ListGroup>
          </Card>
          <h3 className='header-text' style={{ marginTop: '.5rem' }}>Other Skills + Tools</h3>
          <div className='skills-group'>
          <Card>
            <ListGroup style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}variant='flush'>
              <ListGroupItem style={{ textAlign: 'center' }}>
                Write & document APIs
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
              <ListGroupItem style={{ textAlign: 'center' }}>
                Swagger
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
          description='OIN¢ is a simple tracking app that kids and their parents can use to keep track of the money coming in and out.'
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
      </div>
    </>
  );
}

export default Home;
