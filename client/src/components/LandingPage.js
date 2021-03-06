import React, { Component } from 'react';


class LandingPage extends Component {
  render(){
    return(
      <div className="main_div">
        <div className='content dark'>
        <h1 className="landing_page_header">ryanBritt</h1>
        <p className="landing_page_text">full stack web developer and experienced architecture and engineering graduate pursuing challenges where I can leverage a unique combination of technical, organizational, interpersonal skills, and creativity.  </p>
        <div className="scroll_menu">
          <p className="down_text">scroll</p>
          <i className="fa fa-chevron-down"/>
        </div>
          {/* Exploring opportunities where I can offer a unique perspective utilizing my experience including web development, design, engineering, and business experience. */}
      </div>
    </div>
    )
  }
}

export default LandingPage;
