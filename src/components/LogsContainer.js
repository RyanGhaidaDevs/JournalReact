import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import Background from './Images/background.jpg';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';



export default class LogsContainer extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      logs: false,
      editLog: false
    }

  }

  componentDidMount() {
     axios.get("http://localhost:3001/logs", { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

     
  displayLogs(){
    const logs = this.state.logs;
    const editLog = this.state.editLog;
    
    if(logs && !editLog){
       return logs.map(log => {
        return <Grid item sm> <LogCard key={log.id} handleEdit={this.handleEdit} handleDelete={this.handleDelete} log={log} /> </Grid> 
      })
    }
    else if(!!editLog){
      console.log(editLog, this.state)
      return <Grid item sm> <LogCard key={editLog.id} class="edit" handleEditSubmit={this.handleEditSubmit} handleDelete={this.handleDelete} log={editLog} /> </Grid> 
    }
  }

  handleEditSubmit=(update)=>{
    console.log(update)
  }


  handleDelete = (id) => {
    axios.delete(`http://localhost:3001/logs`, {data: {user: {id: id}}}, { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

  handleEdit = (log) => {
    this.setState({editLog: log})
  }


  render(){
    return(
      <div >
        <h1> Logs Page </h1>
        <Grid container >
        {this.displayLogs()}
        </Grid> 
      </div>
    )
  }
}


 