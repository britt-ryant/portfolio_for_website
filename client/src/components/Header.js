import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component'


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      landingPage: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(thing){
    // e.preventDefault();
    console.log('button was clicked ---> ', thing);
    this.props.toggleScroll(thing)
  }
  render(){
    return(
      <div className="header">
        <nav className='main navbar'>
          <h1>I am the header</h1>
          <button className="LandingPage" value="LandingPage" onClick={this.handleClick}>Home</button>
          <button className="ContactMe" onClick={() => scrollToComponent(this.ContactMe)}>Tech</button>
                  <button className="Projects" onClick={() => this.handleClick(this.Projects)}>Projects</button>
          <button className="AboutMe" onClick={this.handleClick}>About</button>
          {/* <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link> */}
        </nav>
      </div>
    )
  }
}

export default Header;
