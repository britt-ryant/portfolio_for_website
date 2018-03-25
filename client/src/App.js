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
import TerminalCommandLineTwo from './components/TerminalCommandLineTwo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      terminalNavbar: false,
      treeCommand: false
    }
    this.scrollFunction = this.scrollFunction.bind(this)
  }
  componentDidMount(){
    scrollToComponent(this.LandingPage, {offset: 0, align: 'top', duration: 500})
  }
  scrollFunction(data){
    console.log(data, `In scroll function on App.js`);
    switch (data) {
      case "AboutMe":
      this.setState({
        terminalNavbar: true
      })
      console.log(`Is this working??`);
      scrollToComponent(this.AboutMe, { offset: 0, align: 'top', duration: 1500})
        break;
      case "Projects":
      this.setState({
        terminalNavbar: true
      })
      scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})
        break;
      case "ContactMe":
      this.setState({
        terminalNavbar: true
      })
      scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500})
        break;
      default:
      this.setState({
        terminalNavbar: false
      })
        scrollToComponent(this.LandingPage, { offset: 0, align: 'top', duration: 1500})
    }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><button className='home side-button' onClick={() => this.scrollFunction("LandingPage")} value="Home" >Home</button></li>
            <li><button className='about side-button' onClick={() => this.scrollFunction("AboutMe")} value="About" >About</button></li>
            <li><button className="projects side-button" onClick={() => this.scrollFunction("Projects")} value="Projects" >Projects</button></li>
            <li><button className="contact side-button" onClick={() => this.scrollFunction("ContactMe")} value="Contact Me" >Contact</button></li>
          </ul>
        </nav>
          <div>
            <TerminalCommandLineTwo scrollTo={this.scrollFunction} terminalNavbar={this.state.terminalNavbar}/>
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
