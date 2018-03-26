import React, { Component } from 'react'

class RmRf extends Component {
  render(){
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
        <div className="main_div">
          <p>Ooops!!!!! I told you not to do that 🙃</p>
          <p>page will refresh in 5 seconds</p>
        </div>
      </div>
    )
  }
}

export default RmRf;
