import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
  }
  handleScroll(section){
    scrollToComponent(section, { offset: 0, align: 'top', duration: 1500})
  }
  render() {
    return (
      <div className="App">
        <nav>
          <button className="Projects" onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})}>Projects</button>
          <button onClick={() => scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500})}> Contact Me</button>

        </nav>

          <div>
            <LandingPage />
            <section className="ContactMe" ref={(section) => {this.ContactMe = section; }}><ContactMe /></section>
            <section className="Projects" ref={(section) => { this.Projects = section; }}><Projects /></section>
            <AboutMe />
                  {/* <Route exact path='/' component={LandingPage} /> */}
                  {/* <Route exact path='/contact' component={ContactMe} /> */}
                  {/* <Route exact path='/projects' component={Projects} /> */}
                  {/* <Route exact path='/about' component={AboutMe} /> */}
            <Footer />
          </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
