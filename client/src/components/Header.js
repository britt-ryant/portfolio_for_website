import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      landingPage: false
    }
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
      landingPage: !this.state.landingPage
    })
  }
  render(){
    return(
      <div className="header">
        <nav className='main navbar'>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    )
  }
}

export default Header;
