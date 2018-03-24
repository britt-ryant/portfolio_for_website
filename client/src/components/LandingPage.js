import React, { Component } from 'react';


class LandingPage extends Component {
  render(){
    return(
      <div className="main_div">
        <div className='pwd'>
          <p className='terminal'>~ / code / portfolio / ryanbritt [<span className='branch'>master</span>]</p>
        </div>
        <div className='content'>
        <h1>Ryan Britt</h1>
        <p>Full stack web developer and experienced architecture and engineering graduate pursuing challenges where I can leverage a unique combination of technical, organizational, interpersonal skills, and creativity.  </p>

          {/* Exploring opportunities where I can offer a unique perspective utilizing my experience including web development, design, engineering, and business experience. */}
      </div>
    </div>
    )
  }
}

export default LandingPage;
