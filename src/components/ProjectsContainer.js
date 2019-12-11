import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import Background from './Images/background.jpg';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import AddProject from './AddProject';




export default class ProjectsContainer extends Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     axios.get("http://localhost:3001/projects", { withCredentials: true }).then( data => this.props.setProjects(data.data.projects))
  }

  handleClick = (event) => {
    const projectId = event.target.id
    this.props.setSelectedProject(projectId);
  }

     
  displayProjects(){
    const projects = this.props.projects;
    if(projects.length > 0){
      return projects.map(project => {
        return <Grid item xl> <h1 onClick={this.handleClick}  id={project.id}> {project.name}</h1></Grid> 
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
        {this.props.projects.length === 0 ? <AddProject/> : <div>  {this.displayProjects()}  </div> }
      </div>
    )
  }
}


 