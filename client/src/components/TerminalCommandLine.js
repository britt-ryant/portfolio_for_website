import React, { Component } from 'react';

class TerminalCommandLine extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentError: this.props.currentCommand,
      dirMessage: false
    }
    this.decodeErrorMessage = this.decodeErrorMessage.bind(this)
    this.renderDirMessage = this.renderDirMessage.bind(this);
    this.renderCommandMessage = this.renderCommandMessage.bind(this);
  }
  componentDidMount(){
    console.log(`I am the props for the error component`, this.props);
    this.decodeErrorMessage()
  }
  decodeErrorMessage(){
    let prefix = this.state.currentError.slice(0, 3)
    let suffix = this.state.currentError.slice(3, this.state.currentError.length)
    console.log(`I am the prefix! -----> `, prefix);
    if(prefix === "cd "){
      this.setState({
        dirMessage: true,
        currentError: suffix
      })
    }
  }

  renderDirMessage(){
    return(
      <div className='pwd'>
        <p className='terminal error'>- bash:  cd: {this.state.currentError} :no such file or directory</p>
      </div>
    )
  }
  renderCommandMessage(){
    return (
      <div className='pwd'>
        <p className="terminal error">- bash: {this.state.currentError} :command not found</p>
      </div>
    )
  }
  render(){
    return(
      <div>
        {this.state.dirMessage ? this.renderDirMessage() : this.renderCommandMessage()
        }
      </div>
    )
  }
}

export default TerminalCommandLine;
