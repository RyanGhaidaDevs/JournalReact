import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import Background from './Images/background.jpg';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

export default class AllLogs extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      logs: false,
    }
  }

  componentDidMount() {
     axios.get("http://localhost:3001/alllogs", { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

  displayLogs(){
    const logs = this.state.logs;
    const props = this.props;
    console.log(props)
    if(logs){
      return logs.map(log => {
        return <Grid item sm> 
          <LogCard {...props} user={log.user_email} key={log.id} class="not edit" handleEdit={this.props.handleEdit} handleDelete={this.handleDelete} log={log} /> 
        </Grid> 
      })
    }
  }
     
  handleEditSubmit=(update)=>{
    console.log(update)
  }

  // handleDelete = (id) => {
  //   axios.delete(`http://localhost:3001/logs`, {data: {user: {id: id}}}, { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  // }


  render(){
    return(
      <div >
        <h1> All Logs </h1>
        <Grid container>
        {this.displayLogs()}
        </Grid> 
      </div>
    )
  }
}


 