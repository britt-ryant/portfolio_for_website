import React, { Component } from 'react'
import postgresql from '../images/postgreslogo.png';
import python from '../images/pythonlogo.png';
import ruby from '../images/rubylogo.png';
import rails from '../images/railslogo.png'
import php from '../images/phplogo.png';
import node from '../images/nodelogo.png';
import javascript from '../images/javascriptlogo.png';
import html from '../images/htmllogo.png';
import laravel from '../images/laravellogo.png';
import react from '../images/reactlogo.png';
import native from '../images/reactnativelogo.png';




class Technologies extends Component {

  render(){
    return(
      <div className="main_div">
        <div className="technologies">
          <img className="big-logo" src={postgresql} alt="postgreSQL" />
          <img className="big-logo" src={python} alt="Python" />
          <img className="big-logo" src={ruby} alt="Ruby" />
          <img className="big-logo" src={rails} alt="Ruby on Reails" />
          <img className="big-logo" src={php} alt="PHP" />
          <img className="big-logo special" src={node} alt="NodeJs" />
          <img className="big-logo special" src={javascript} alt="JavaScript" />
          <img className="big-logo special" src={html} alt="HTML CSS" />
          <img className="big-logo" src={laravel} alt="Laravel" />
          <img className="big-logo special" src={react} alt="React js" />
          {/* <img className="big-logo" src={native} alt="React Native" /> */}
        </div>
      </div>
    )
  }
}



export default Technologies
