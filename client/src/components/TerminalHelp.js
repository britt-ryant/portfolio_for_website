import React, { Component } from 'react';

class TerminalHelp extends Component {
  render(){
    return(
      <div className="main_div">
        <div className='content help'>
          <p> file path: /code/portfolio/ryanbritt</p>
          <p>*** In the ryanbritt directory ***</p>
          <p>cd about = about section</p>
          <p>cd tech = technologies section</p>
          <p>cd projects = projects section</p>
          <p>cd .. = back to landing page</p>
          <p>cd home = back to landing page</p>
          <p>cd  = root dir</p>
          <p>git push origin master = ryan britt's github profile</p>
          <p>git checkout /* PROJECT NAME */ = ryan britt's github repo for that project</p>
          <p>*****************</p>
          <p>type help to toggle the help menu</p>
        </div>
      </div>
    )
  }
}

export default TerminalHelp;
