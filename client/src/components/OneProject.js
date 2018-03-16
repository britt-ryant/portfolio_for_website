import React from 'react';


const OneProject = (props) => {
  return(
    <div className="sub_div">
      <h2>{props.projectData.name}</h2>
      <img src={props.projectData.picture} alt="project-screenshot" />
      <p>{props.projectData.tech}</p>
    </div>
  )
}

export default OneProject;
