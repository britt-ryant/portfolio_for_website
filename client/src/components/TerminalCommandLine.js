import React, { Component } from 'react';

class TerminalCommandLine extends Component {
  render(){
    return (
      <div className='pwd'>
        <p className="terminal error">- bash:  {this.props.currentCommand} : command not found</p>
      </div>
    )
  }
}

export default TerminalCommandLine;
