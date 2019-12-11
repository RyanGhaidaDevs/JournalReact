import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import Background from './Images/background.jpg';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import Test from './Test';




export default class ProjectsContainer extends Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     axios.get("http://localhost:3001/projects", { withCredentials: true }).then( data => console.log(data))
  }

     
  displayProjects(){
    const propjects = this.props.projects;
    
    if(projects){
      return projects.map(project => {
        return <Grid item sm> <LogCard {...props} key={log.id} class="not edit" handleEdit={this.props.handleEdit} handleDelete={this.handleDelete} log={log} /> </Grid> 
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
        {this.props.projects.length === 0 ? <Test/> : <h1> {this.desplayProjects()} </h1>}
      </div>
    )
  }
}


 