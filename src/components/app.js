import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import DashBoard from './DashBoard';
import LogsContainer from './LogsContainer';
import NavBar from './NavBar';
import BugLog from './AddBugLog/BugLog';
import Test from './Test';



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      route: false
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
    this.handleNavbarNavigation = this.handleNavbarNavigation.bind(this)

  }

  componentWillMount(){
    this.checkLoginStatus();
  }

  checkLoginStatus(){
    axios.get("http://localhost:3001/logged_in", {withCredentials: true}).then(response=> {
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
      console.log("login error", error)
    })
  }

  handleSuccesfulAuth(data) {
    this.handleLogin(data)
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
      user: {}
    })

    axios.delete("http://localhost:3001/logout", {withCredentials: true}).catch(err => {
      console.log("logout error", err)
    })

  }

  handleNavbarNavigation(route){
    if(route === "VIEW ALL BUG LOGS"){
      console.log(this.props)
    }
  }

  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path={"/logs"} 
            render={ props => (
              <div> 
              <NavBar {...props} handleNavbarNavigation={this.handleNavbarNavigation} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <LogsContainer {...props} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
              </div> 
            )}
          /> 
          <Route 
            exact 
            path={"/dashboard"} 
            render={ props =>(
              <div> 
              <NavBar {...props} handleNavbarNavigation={this.handleNavbarNavigation} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <DashBoard {...props} loggedInStatus={this.state.loggedInStatus} /> 
              </div> 
          )}
          
        /> 
          <Route 
            exact 
            path={"/addLog"} 
            render={ props =>(
              <div> 
              <NavBar {...props} handleNavbarNavigation={this.handleNavbarNavigation} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <BugLog {...props} user={this.state.user}/>
              </div>
            )}
          />
          <Route 
            exact 
            path={"/about"} 
            render={ props =>(
              <div> 
              <NavBar {...props} handleNavbarNavigation={this.handleNavbarNavigation} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <Test {...props} user={this.state.user}/>
              </div>
            )}
          />
        
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}

