import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import DashBoard from './DashBoard';
import Home from './Home';
import NavBar from './NavBar';
import BugLog from './AddBugLog/BugLog';
import Test from './Test';



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
  }

  componentWillMount(){
    this.checkLoginStatus();
    console.log("checking login")
  }

  checkLoginStatus(){
    axios.get("http://localhost:3001/logged_in", {withCredentials: true}).then(response=> {
      console.log(response)
      if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        console.log("NOT_LOGGED_IN", response)
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        console.log("NOT_LOGGED_IN");
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("check login error", error)
    })
  }

  handleSuccesfulAuth(data) {
    this.handleLogin(data)
  }

  handleLogin(data){
    console.log("data login", data)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }, () => console.log(this.state))

    axios.delete("http://localhost:3001/logout", {withCredentials: true}).then( res => {
    }).catch(err => {
      console.log("logout error", err)
    })

  }

  render() {
    console.log(this.state)
    return (
      <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path={"/"} 
            render={ props => (
              <div> 
              <NavBar {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <Home {...props} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
              </div> 
            )}
          /> 
          <Route 
            exact 
            path={"/dashboard"} 
            render={ props =>(
              <div> 
              <NavBar {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user } handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <DashBoard {...props} loggedInStatus={this.state.loggedInStatus} /> 
              </div> 
          )}
          
        /> 
          <Route 
            exact 
            path={"/addLog"} 
            render={ props =>(
              <div> 
              <NavBar {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user} handleSuccesfulAuth={this.handleSuccesfulAuth}/> 
              <BugLog {...props} user={this.state.user}/>
              </div>
            )}
          />
        
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}

