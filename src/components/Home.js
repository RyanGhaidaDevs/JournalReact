import React, { Component } from 'react';
import axios from 'axios';




export default class Home extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      logs: [] 
    }

  }


  componentDidMount() {
     axios.get("http://localhost:3001/logs", { withCredentials: true }).then(x=> this.displayLogs(x))
  }

  displayLogs(data){
    const logs = data.data.logs
    console.log(logs)
    this.setState({
      logs: logs
    }, ()=> console.log(this.state))
  }

 

  render(){
    
    return(
      <div>
        <h1> Logs Page </h1>
        <h3> Welcome {this.props.user.email} !</h3> 
        {this.state.logs[0] ? this.state.logs[0].bugTitle : <h1>loading </h1>}
      </div>
    )
  }
}


 