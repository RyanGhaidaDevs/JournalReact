import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import LogsContainer from './LogsContainer';
import NavBar from './NavBar';
import BugLog from './AddBugLog/BugLog';
import AddProject from './AddProject';
import { Redirect } from 'react-router';
import BugShowPage from './AddBugLog/BugShowPage';
import ProjectsContainer from './ProjectsContainer';
import AllLogs from './AllLogs';
import Registration from './auth/Registration';
import Login from './auth/Login'; 

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      editLog: {},
      projects: [], 
      projectSelected: false 
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.setProjects = this.setProjects.bind(this);
    this.setSelectedProject = this.setSelectedProject.bind(this);
  }

  componentWillMount(){
    this.checkLoginStatus();
  }

  checkLoginStatus(){
    axios.get("http://localhost:3001/logged_in", {withCredentials: true}).then(response => {
      if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("login error:", error)
    })
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      projectSelected: false,
      user: {}
    })
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).catch(error => {
      console.log("logout error", error)
    })
  }

  setProjects(projects){
    console.log(projects)
    this.setState({
      projects: projects.data
    })
  }

  setSelectedProject(projectId){
    if(projectId === this.state.projectSelected.id){
      this.setState({
        projectSelected: false  
      })
    }
    else if (!this.state.projects.find((project) => project.id == projectId)) {
      axios.get("http://localhost:3001/projects", { withCredentials: true }).then( data => this.setProjects(data)).then(() =>{
      const project = this.state.projects.find((project) => project.id == projectId)
      this.setState({
        projectSelected: project
      })
      } )
    }
    else{
      const project = this.state.projects.find((project) => project.id == projectId)
      this.setState({
        projectSelected: project
      })
    }
  }

  handleEdit = (log, props) => {
    this.setState({editLog: log}, () => props.history.push("/editLog"))
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
        <Redirect from="/" exact to="/homepage" />
        <Route 
            path={"/registration"} 
            render={ props => (
              <div> 
                <NavBar {...props}  projectSelected={this.state.projectSelected} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <Registration {...props} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
          <Route 
            path={"/login"} 
            render={ props => (
              <div> 
                <NavBar {...props}  projectSelected={this.state.projectSelected} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <Login {...props} handleLogin={this.handleLogin} /> 
              </div> 
            )}
          /> 
        <Route 
            path={"/homepage"} 
            render={ props => (
              <div> 
                <NavBar {...props}  projectSelected={this.state.projectSelected} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <ProjectsContainer {...props} setSelectedProject={this.setSelectedProject} setProjects={this.setProjects}handleEdit={this.handleEdit} loggedInStatus={this.state.loggedInStatus} user={this.state.user} projects={this.state.projects} selectedProject={this.state.projectSelected}/> 
              </div> 
            )}
          /> 
          <Route 
            exact 
            path={"/logs"} 
            render={ props => (
              <div> 
                <NavBar {...props}  projectSelected={this.state.projectSelected} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <LogsContainer {...props} handleEdit={this.handleEdit} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
              </div> 
            )}
          /> 
          <Route 
            exact 
            path={"/alllogs"} 
            render={ props => (
              <div> 
                <NavBar {...props}  projectSelected={this.state.projectSelected} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <AllLogs {...props} handleEdit={this.handleEdit} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
              </div> 
            )}
          /> 
          <Route 
            exact 
            path={"/addLog"} 
            render={ props =>(
              <div> 
                <NavBar {...props}  projectSelected={this.state.projectSelected} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <BugLog {...props} projectSelected={this.state.projectSelected} user={this.state.user}/>
              </div>
            )}
          />
          <Route 
            exact 
            path={"/addProject"} 
            render={ props =>(
              <div> 
                <NavBar {...props} projectSelected={this.state.projectSelected} handleNavbarNavigation={this.handleNavbarNavigation} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
                <AddProject {...props} user={this.state.user}/>
              </div>
            )}
          />
          <Route 
            exact 
            path={"/editLog"} 
            render={ props => (
              <div> 
                <NavBar {...props}  handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} /> 
                <BugShowPage {...props} loggedInStatus={this.state.loggedInStatus} log={this.state.editLog} user={this.state.user}/> 
              </div> 
            )}
          /> 
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}

