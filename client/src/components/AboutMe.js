import React, { Component } from 'react';
import image from '../images/Ryan.jpg';
import ryan from '../images/Ryan_2.JPG';


class About extends Component {
  render(){
    return(
      <div className="main_div">
        <div className="content_large">
          <img src={ryan} className="about_pic" />
          <div className="ryan_info">
          <h2 className="about_title">about ryan</h2>
          <p className="about_me">Former naval architect and marine engineer turned developer.  My passion for problem solving led me to Stevens Institute of Technology to become an engineer.  Post-graduation, I pursued a career in the engineering field where I was able to apply this knowledge in my everyday work.  Engineering was a rewarding career for me, however, it was not my passion.  Through further investigation, I discovered the world of code.  I am now a code artist, applying my problem-solving abilities while incorporating my sense of creativity.</p>
          </div>

        </div>
      </div>
    )
  }
}

export default About;
