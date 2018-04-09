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
  const allProjects = this.state.apiData.map((project, id) => {
          return <OneProject projectData={project} key={id} />
    })
    return(
      <div className="main_div">
        <div className="content_large">
        <div className="project_header">
        <h3>Projects</h3>
      </div>
      <table className="content_projects">
        <tbody>
            <tr className="row">
                {allProjects}
              </tr>
            </tbody>
      </table>
    </div>
    </div>
    )
  }
  render(){
    // if(this.state.apiDataReceived){
    //   return this.renderProjects()
    // } else{
    //   return(
    //     <div className="main_div">
    //       <h1>Projects</h1>
    //       <p>loading</p>
    //     </div>
    //   )
    //
    // }
    return(
      <div className="main_div">
        <div className="projects_content">
          {this.state.apiDataReceived ? this.renderProjects() : <div className="content">Opps, this is awkward! Seems that there has been an error with the server</div>}

        </div>
      </div>
    )
  }
}

export default Projects;
