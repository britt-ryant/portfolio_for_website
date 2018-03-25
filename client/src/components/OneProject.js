import React from 'react';


const OneProject = (props) => {
  return(
    <td className="project">
      <h2>{props.projectData.name}</h2>
      <img src={props.projectData.picture} alt="project-screenshot" />
      <p>{props.projectData.tech}</p>
    </td>
  )
}

export default OneProject;
