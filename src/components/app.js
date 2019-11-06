import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import DashBoard from './DashBoard';
import Home from './Home';
import NavBar from './NavBar';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
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
  
  componentDidMount(){
    this.checkLoginStatus();
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

  handleLogin(data){
    console.log("data login", data)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path={"/"} 
            render={ props => (
              <div> 
              <NavBar {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
              <Home {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
              </div> 
            )}
          /> 
          <Route 
          exact 
          path={"/dashboard"} 
          render={ props =>(
            <div> 
            <NavBar {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
            <DashBoard {...props} loggedInStatus={this.state.loggedInStatus} /> 
            </div> 
          )}
          
        /> 
          <Route 
            exact 
            path={"/test"} 
            render={ props =>(
              <NavBar {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> 
            )}
          />
        
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}
