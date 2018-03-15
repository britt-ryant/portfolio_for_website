import React, { Component } from 'react';
// import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header';
// import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router className="router">
          <div>
            <Header />
                  <Route exact path='/' component={LandingPage} />
                  <Route exact path='/contact' component={ContactMe} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/about' component={AboutMe} />
                {/* <Footer /> */}
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
