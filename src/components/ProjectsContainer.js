import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    background: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)',
  },
  Create: {
    color: "orange",
    border: "groove",
    background: "white",
    fontSize: 18,
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)'
  },

};


class ProjectsContainer extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      addProject: false,
      projects: false, 
      projectSelected: false,
      name: ""
    }

    this.setProjects = this.setProjects.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
     axios.get("https://bugloggerapi.herokuapp.com/projects", { withCredentials: true }).then( data => this.setState({
       projects: data.data
     }))
  }

  handleSelect = (projectId) => {
    if(projectId === this.state.projectSelected.id){
      this.setState({
        projectSelected: false  
      }, () => this.props.setSelectedProject(false))
    }
    else if (!this.state.projects.find((project) => project.id == projectId)) {
      axios.get("https://bugloggerapi.herokuapp.com/projects", { withCredentials: true }).then( data => this.setProjects(data)).then(() =>{
      const project = this.state.projects.find((project) => project.id == projectId)
      this.setState({
        projectSelected: project
      }, () => this.props.setSelectedProject(project))
      } )
    }
    else{
      const project = this.state.projects.find((project) => project.id == projectId)
      this.setState({
        projectSelected: project
      }, () => this.props.setSelectedProject(project))
    }
  }

  setProjects(projects){
    this.setState({
      projects: projects.data
    })
  }

  handleDelete = (id) => {
     axios.delete(`https://bugloggerapi.herokuapp.com/projects`, {data: {user: {id: id}}}, { withCredentials: true }).then( data => this.setState({
        projects: data.data
     })).then(() => this.props.setSelectedProject(false))
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=> console.log(this.state))
  }

  addProject = () => {
    this.setState({
      addProject: true
    })
  }


  handleSubmit = (event)=> {
    event.preventDefault();

    const {name} = this.state 

    axios.post("https://bugloggerapi.herokuapp.com/projects",{
      user: {
        name: name,
        user_id: this.props.user.id
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      console.log("response", response)
      this.setState({
        addProject: false
      })
      this.props.setSelectedProject(response.data.project)
      this.props.history.push("/addLog")
    }).catch( error => {
      console.log("posting project error", error)
    });
  };

  displayProjects(){
    const projects = this.state.projects;
    const selectedProject = this.props.selectedProject
    if(projects){
      return projects.map(project => {
        return <Grid item xl> <ProjectCard  handleDelete={this.handleDelete} handleSelect={this.handleSelect}  id={project.id} project={project}> </ProjectCard></Grid> 
      })
    }
  }


  render(){
    const { classes } = this.props;

    return(
      <div>
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ }}
          >
        
          <TextField 
            className={classes.root}
            margin="normal"
            placeholder="Project Name"
            label="Project Name"
            name="name"
            onChange={this.handleChange}         
            inputProps={{
              style: {fontSize: 28, padding: 20, width: 500}
            }}
            />

            <Button 
            className={classes.Create}
            label="submit"
            primary={"true"}
            margin='15'
            onClick={this.handleSubmit}
            >
              Create Project 
            </Button>
            
            <Grid container> 
                {this.displayProjects()} 
            </Grid> 
          </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ProjectsContainer)

 