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
  }
  componentDidMount(){
    scrollToComponent(this.LandingPage, {offset: 0, align: 'top', duration: 500})
  }
  render() {
    return (
      <div className="App">
        <nav>
          <ul>

            <li><input type="submit" className='home' onClick={() => scrollToComponent(this.LandingPage, { offset: 0, align: 'top', duration: 1500})} value="Home" /></li>
            <li><input type="submit" className='about' onClick={() => scrollToComponent(this.AboutMe, { offset: 0, align: 'top', duration: 1500})} value="About" /></li>
            <li><input type="submit" className="projects" onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})} value="Projects" /></li>
            <li><input type="submit" className="contact" onClick={() => scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500})} value="Contact Me" /></li>
          </ul>
        </nav>
          <div>
            <section className="LandingPage" ref={(section) => {this.LandingPage = section; }}><LandingPage /></section>
            <section className="AboutMe" ref={(section) => {this.AboutMe = section; }}><AboutMe /></section>
            <section className="Projects" ref={(section) => { this.Projects = section; }}><Projects /></section>
            <section className="ContactMe" ref={(section) => {this.ContactMe = section; }}><ContactMe /></section>
            <Footer />
          </div>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
