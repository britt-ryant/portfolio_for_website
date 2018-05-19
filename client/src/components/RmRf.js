import React, { Component } from 'react';
import Countdown from 'react-countdown-now';


class RmRf extends Component {
  render(){
    return (
      <div className="App">
        <div className="main_div">
          <p>Ooops!!!!! You shouldn't have done that 🙃</p>
          <p>page will refresh in </p><Countdown date={Date.now() + 10000} /><p> seconds</p>
        </div>
      </div>
    )
  }
}

export default RmRf;
