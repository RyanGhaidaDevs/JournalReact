import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';

//Logs Container

export default class LogsContainer extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      logs: false 
    }
  }

  componentDidMount() {
     axios.get("http://localhost:3001/logs", { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

     
  displayLogs(){
    const logs = this.state.logs
    if(logs){
      console.log(logs)
       return logs.map(log => {
        return <LogCard key={log.id} log={log} />
      })
    }
  }


  render(){
    return(
      <div>
        <h1> Logs Page </h1>
        {this.displayLogs()}
      </div>
    )
  }
}


 