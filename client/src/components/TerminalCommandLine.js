import React, { Component } from 'react';

class TerminalCommandLine extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='pwd'>
        <p className="terminal error">- bash: command not found</p>
      </div>
    )
  }
}

export default TerminalCommandLine;
