import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import Background from './Images/background.jpg';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import AddProject from './AddProject';
import ProjectCard from './ProjectCard';




export default class ProjectsContainer extends Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     axios.get("http://localhost:3001/projects", { withCredentials: true }).then( data => this.props.setProjects(data.data.projects))
  }

  handleSelect= (projectId) => {
    this.props.setSelectedProject(projectId);
  }

  handleDelete = (id) => {
    console.log(id)
     axios.delete(`http://localhost:3001/projects`, {data: {user: {id: id}}}, { withCredentials: true }).then( data => this.displayProjects())
  }

  displayProjects(){
    const projects = this.props.projects;
    if(projects.length > 0){
      return projects.map(project => {
        return <Grid item xl> <ProjectCard handleDelete={this.handleDelete} handleSelect={this.handleSelect}  id={project.id} project={project}> </ProjectCard></Grid> 
      })
    }
    }
     

  handleEditSubmit=(update)=>{
    console.log(update)
  }

  render(){
    return(
      <div >
        {this.props.projects.length === 0 ? <AddProject/> : <div>  {this.displayProjects()}  </div> }
      </div>
    )
  }
}


 