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
import java from '../images/Java_logo.png';
import reactNative from '../images/react_native.png';
import mySQL from '../images/MySQL_logo.png';




class Technologies extends Component {

  render(){
    return(
      <div className="main_div">

        <table className="technologies">
        <tbody>
          <tr className="top_row">
            <td className="logo_td"><img className="image" src={postgresql} alt="postgreSQL" /></td>
            <td className="logo_td"><img className="image" src={python} alt="Python" /></td>
            <td className="logo_td"><img className="image" src={ruby} alt="Ruby" /></td>
            <td className="logo_td_rails"><img className="image_long" src={rails} alt="Ruby on Rails" /></td>
            <td className="logo_td"><img className="image_medium" src={php} alt="PHP" /></td>
          </tr>
          <tr className="bottom_row">
            <td className="logo_td"><img className="image" src={node} alt="NodeJs" /></td>
            <td className="logo_td"><img className="image" src={javascript} alt="JavaScript" /></td>
            <td className="logo_td"><img className="image" src={laravel} alt="Laravel" /></td>
            <td className="logo_td"><img className="htmllogo" src={html} alt="HTML CSS" /></td>
            <td className="logo_td_rails"><img className="image_long" src={react} alt="React js" /></td>

            {/* <td className="logo_td"><img className="image" src={native} alt="React native js" /></td> */}
          </tr>
            <tr className="third-row">
              <td className="logo_td"></td>
              <td className="logo_td"><img className="image_medium" src={mySQL} alt="mySQL" /></td>
              <td className="logo_td"><img className="image_medium" src={java} alt="java" /></td>
              <td className="logo_td_bigger"><img className="htmllogo" src={reactNative} alt="react native" /></td>
            </tr>
          {/* <img className="big-logo" src={native} alt="React Native" /> */}
        </tbody>
        </table>
      </div>
    )
  }
}



export default Technologies
