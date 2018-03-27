import React, { Component } from 'react';
import TerminalCommandLine from './TerminalCommandLine'

class TerminalCommandLineTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
      pwd: "~/code/portfolio/ryanbritt ",
      backupCount: 0,
      terminalNavbar: this.props.terminalNavbar,
      pwdCode: '/code/',
      pwdPortfolio: 'portfolio/',
      pwdRyanBritt: 'ryanbritt',
      pwdBranch: '[master]',
      currentCommand: "",
      commandCount: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  componentDidMount(){
    let currentDate = new Date();
    let time = `${currentDate.getHours()}:${currentDate.getMinutes()}`
    console.log(time);
    this.setState({
      currentTime: time
    })
  }
  handleChange(e){
    const value = e.target.value.toLowerCase();
    this.setState({
      currentCommand: value,
      errorWord: value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.refs.form.reset()
    console.log(`I was entered`, this.props.terminalNavbar);
    this.setState({
      terminalNavbar: this.props.terminalNavbar
    }, () => this.checkTerminal())
  }
  checkTerminal(){
    if (this.state.currentCommand === "cd .." && this.state.backupCount === 0 && this.state.terminalNavbar === false){
      this.setState({
        pwdRyanBritt: "",
        pwdBranch: "",
        backupCount: 1,
        currentCommand: ""
      }, () => console.log(this.state))
    } else if(this.state.currentCommand === "cd .." && this.state.backupCount === 1){
      this.setState({
        pwdPortfolio: "",
        backupCount: 2,
        currentCommand: ""
      }, () => console.log(this.state))
    } else if (this.state.currentCommand === "cd .." && this.state.backupCount === 2) {
      this.setState({
        pwdCode: "",
        currentCommand: "",
        backupCount: 3
      }, () => console.log(this.state))
    }else if(this.state.backupCount === 3 && this.state.currentCommand === "cd code") {
      this.setState({
        pwdCode: "/code/",
        currentCommand: "",
        backupCount: 2
      }, () => console.log(this.state))
    } else if(this.state.backupCount === 2 && this.state.currentCommand === "cd portfolio") {
      this.setState({
        pwdPortfolio: 'portfolio/',
        currentCommand: "",
        backupCount: 1
      }, () => console.log(this.state))
    } else if(this.state.backupCount === 1 && this.state.currentCommand === "cd ryanbritt"){
      this.setState({
        pwdRyanBritt: 'ryanbritt',
        pwdBranch: '[master]',
        currentCommand: "",
        backupCount: 0
      }, () => console.log(this.state))
    } else if(this.state.currentCommand === "cd") {
      this.setState({
        backupCount: 3,
        pwdBranch: "",
        pwdRyanBritt: "",
        pwdPortfolio: "",
        pwdCode: "",
        currentCommand: ""
      })
    } else if (this.state.currentCommand === "cd about" && this.state.backupCount === 0){
      this.setState({
        // terminalNavbar: true,
        currentCommand: ""
      }, () => this.props.scrollTo('AboutMe'))
    }else if (this.state.currentCommand === "cd projects" && this.state.backupCount === 0){
      this.setState({
        // terminalNavbar: true,
        currentCommand: ""
      }, () => this.props.scrollTo('Projects'))
    }else if (this.state.currentCommand === "cd contact" && this.state.backupCount === 0){
      this.setState({
        // terminalNavbar: true,
        currentCommand: ""
      }, () => this.props.scrollTo(`ContactMe`))
    }else if(this.state.currentCommand === "cd .." && this.state.backupCount === 0 && this.state.terminalNavbar === true){
      console.log(`In it!!!`);
      this.setState({
        // terminalNavbar: false,
        currentCommand: ""
      }, () => this.props.scrollTo('LandingPage'))
    }else if(this.state.currentCommand === "git push origin master" && this.state.backupCount === 0) {
      this.setState({
        currentCommand: ""
      }, () => this.props.gitHubClick())
    } else if (this.state.currentCommand === "help") {
      this.setState({
        currentCommand: ''
      }, () => this.props.scrollTo('help'))
    } else if (this.state.currentCommand = 'rm -rf .' && this.state.backupCount === 3) {
      console.log(`I am the rm -rf`, this.state.currentCommand);
      this.setState({
        currentCommand: ''
      }, () => this.props.deleteWebPage())
    } else {
      console.log(`ERROR`, this.state.errorWord);
      this.setState({
        error: true,
      }, () => this.setTimeoutArrowFunction())
      // setTimeout(
      //   this.setState({
      //     currentCommand: ""
      //   }), 10000)
    }
  }
  setTimeoutArrowFunction(){
    setTimeout(() => {
      this.setState({
        currentCommand: "",
        error: false
      })
    }, 1000)
  }


  render(){
      return(
        <div className='pwd'>
          <p className='terminal'> ~ {this.state.pwdCode}{this.state.pwdPortfolio}{this.state.pwdRyanBritt}<span className="branch">{this.state.pwdBranch}</span></p>
          <br></br>
          <br></br>
          <br></br>
          <p className='terminal'> {this.state.currentTime} $ {this.state.currentCommand}</p>
          {this.state.error ? <TerminalCommandLine currentCommand={this.state.errorWord} /> : ''}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form onSubmit={this.handleSubmit} ref="form">
            <input className="input_box" type='text' onChange={this.handleChange} />
          </form>
        </div>
      )
  }
}


export default TerminalCommandLineTwo;
