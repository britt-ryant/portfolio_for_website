import React, {Component} from 'react';
import projectOne from '../images/Catch-tracker.png';
import projectTwo from '../images/Waiter-App.png';
import beatBox from '../images/Beat-box.png'
import dummyPic from '../images/test.jpg';
import connection from '../images/project-4.png';
import gitIcon from '../images/project_github.png';
import liveIcon from '../images/live_icon.png';


class OneProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      picture: null,
      id: this.props.projectData.id,
      projectData: this.props.projectData,
      about: false,
    }
  }
  componentDidMount(){
    if(this.state.id === 1){
      this.setState({
        picture: projectOne
      })
    } else if (this.state.id === 2){
      this.setState({
        picture: projectTwo
      })
    } else if( this.state.id === 3){
      this.setState({
        picture: beatBox
      })
    } else if(this.state.id === 4){
      this.setState({
        picture: connection
      })
    } else {
      this.setState({
        picture: dummyPic
      })
    }
  }
  handleGitClick(){
    console.log(this.state.projectData);
    window.open(this.state.projectData.link)
  }
  handleLiveClick(){
    console.log(this.state.projectData.live);
    window.location.assign(this.state.projectData.live);
  }
  render(){
    return(
      <td className="project">
          <h3>{this.state.projectData.name}</h3>
          <img className="project_image" src={this.state.picture} alt="project-screenshot" />
          <p className="project_text">{this.state.projectData.tech}</p>
          {this.state.id !== 4 ? <button onClick={()=> this.handleLiveClick()} className="project_link"><img className="git_logo" src={liveIcon} /></button> : ''}
          <button onClick={()=> this.handleGitClick()} className="project_link"><img className="git_logo" src={gitIcon} /></button>

          {/* <a href="www.google.com" className="project_link">github</a> */}
      </td>
    )
  }
}

export default OneProject;
