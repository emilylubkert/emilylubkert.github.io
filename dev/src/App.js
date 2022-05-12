import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import ContactNav from './components/ContactNav';

function App() {
  return (

        <Router>
          <ContactNav />
          <div className='container' style={{ padding: '20px' }}>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/projects/' element={<Projects />} />
              <Route path='*' exact element={<h4>Page Not Found</h4>} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;
