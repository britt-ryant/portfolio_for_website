import React, {Component} from 'react';
import projectOne from '../images/Catch-tracker.png';
import projectTwo from '../images/Waiter-App.png';
import beatBox from '../images/Beat-box.png'
import dummyPic from '../images/test.jpg';
import connection from '../images/project-4.png';


class OneProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      picture: null,
      id: this.props.projectData.id,
      projectData: this.props.projectData
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
  render(){
    return(
      <td className="project">
        <h2>{this.state.projectData.name}</h2>
        <img src={this.state.picture} alt="project-screenshot" />
        <p>{this.state.projectData.tech}</p>
      </td>
    )
  }
}

export default OneProject;
