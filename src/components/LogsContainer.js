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
     console.log(this.props)
  }

     
  displayLogs(){
    const logs = this.state.logs;
    const editLog = this.state.editLog;
    const props = this.props;
    if(logs){
      return logs.map(log => {
        return <Grid item sm> <LogCard {...props} key={log.id} class="not edit" handleEdit={this.props.handleEdit} handleDelete={this.handleDelete} log={log} /> </Grid> 
      })
    }
    }
     

  handleEditSubmit=(update)=>{
    console.log(update)
  }


  handleDelete = (id) => {
    axios.delete(`http://localhost:3001/logs`, {data: {user: {id: id}}}, { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

 


  render(){
    return(
      <div >
        <h1> Logs Page </h1>
        <Grid container>
        {this.displayLogs()}
        </Grid> 
      </div>
    )
  }
}


 