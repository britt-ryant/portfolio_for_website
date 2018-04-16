import React, { Component } from 'react';
import image from '../images/Ryan.jpg'


class About extends Component {
  render(){
    return(
      <div className="main_div">
        <div className="content_large">
          <img src={image} className="about_pic" />
          <h2 className="about_title">about ryan</h2>
          <p className="about_me">Former naval architect and marine engineer, turned developer.  my passion for problem solving carried me through stevens institute of tchnology as an engineer.  post graduation, I pursued a career in the engineering field where I was able to apply my knowledge of the field in my everyday work.  engineering was a rewarding career for me however, it was not my passion.  through further investigation, I discovered the world of code.  I am now a code artist, applying my problem solving abilities while incorporating my sense of creativity.</p>

        </div>
      </div>
    )
  }
}

export default About;
