import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
// import ContactMe from './components/ContactMe';
import Technologies from './components/Technologies'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import scrollToComponent from 'react-scroll-to-component';
import TerminalCommandLineTwo from './components/TerminalCommandLineTwo';
import TerminalHelp from './components/TerminalHelp';
import RmRf from './components/RmRf';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      terminalNavbar: false,
      treeCommand: false,
      fireRedirect: false,
      terminalHelp: false,
      delete: false
    }
    this.scrollFunction = this.scrollFunction.bind(this)
    this.gitHubClick = this.gitHubClick.bind(this)
    this.renderTerminalHelp = this.renderTerminalHelp.bind(this)
    this.deleteWebPage = this.deleteWebPage.bind(this)
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
      scrollToComponent(this.AboutMe, { offset: 0, align: 'top', duration: 1500})
        break;
      case "Projects":
      this.setState({
        terminalNavbar: true
      })
      scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})
        break;
      case "Technologies":
      this.setState({
        terminalNavbar: true
      })
      scrollToComponent(this.Technologies, { offset: 0, align: 'top', duration: 1500})
        break;
      case "help":
      this.setState({
        terminalNavbar: false
      })
      scrollToComponent(this.LandingPage, { offset: 0, align: 'top', duration: 1500})
      this.renderTerminalHelp()
        break;
      default:
      this.setState({
        terminalNavbar: false
      })
        scrollToComponent(this.LandingPage, { offset: 0, align: 'top', duration: 1500})
    }
  }
  gitHubClick(){
    this.setState({
      fireRedirect: true
    })
    window.location.assign('https://github.com/britt-ryant')
  }
  renderTerminalHelp(){
    this.setState({
      terminalHelp: !this.state.terminalHelp
    })
  }
  deleteWebPage(){
    this.setState({
      delete: !this.state.delete
    })
    setTimeout(() => {
      window.location.reload()}, 5000)
  }
  render() {
    if(!this.state.delete){
      return (
        <div className="App">
          <nav>
            <ul>
              <li><button className='home side-button' onClick={() => this.scrollFunction("LandingPage")} value="Home" >home</button></li>
              <li><button className='about side-button' onClick={() => this.scrollFunction("AboutMe")} value="About" >about</button></li>
              <li><button className="contact side-button" onClick={() => this.scrollFunction("Technologies")} value="Contact Me" >tech</button></li>
              <li><button className="projects side-button" onClick={() => this.scrollFunction("Projects")} value="Projects" >projects</button></li>
            </ul>
          </nav>
          <div>
            <TerminalCommandLineTwo scrollTo={this.scrollFunction} terminalNavbar={this.state.terminalNavbar} gitHubClick={this.gitHubClick}
            renderTerminalHelp={this.renderTerminalHelp}
            deleteWebPage={this.deleteWebPage}/>
              <section className="LandingPage" ref={(section) => {this.LandingPage = section; }}>{this.state.terminalHelp ? <TerminalHelp /> : <LandingPage />}</section>
              <section className="AboutMe" ref={(section) => {this.AboutMe = section; }}><AboutMe /></section>
              <section className="Technologies" ref={(section) => {this.Technologies = section; }}><Technologies /></section>
              <section className="Projects" ref={(section) => { this.Projects = section; }}><Projects /></section>
              <Footer />
            </div>
            {/* <Router>
              {this.state.fireRedirect ? <Redirect to="https://github.com/britt-ryant"/> : ''}

            </Router> */}
          </div>
        );
    } else {
      return (
        <div>
          <RmRf />
        </div>
      )
    }
  }
}

export default App;
