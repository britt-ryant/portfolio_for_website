import React, { Component } from 'react';
import OneProject from './OneProject';
import axios from 'axios';


class Projects extends Component {
  constructor(){
    super();
    this.state ={
      apiDataReceived: false,
      apiData: null
    }
  }

  componentDidMount(){
    console.log(`rendering data for projects`);
    axios.get('/api/projects')
    .then(result => {
      this.setState({
        apiDataReceived: true,
        apiData: result.data.data
      }, () => {
        console.log(this.state);
      })
    })
  }
  renderProjects(){
    return this.state.apiData.map((project, id) => {
      return <OneProject projectData={project} key={id} />
    })
  }
  render(){
    if(this.state.apiDataReceived){
      return this.renderProjects()
    } else{
      return(
        <div>
          <h1>Projects</h1>
          <p>loading</p>
        </div>
      )

    }
  }
}

export default Projects;
