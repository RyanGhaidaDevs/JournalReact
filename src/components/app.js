import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import DashBoard from './DashBoard';
import Home from './Home';


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
    axios.get("http://localhost:3001/logged_in", {withCredentials: true}).then(res=> {
      console.log(res)
      if(res.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        console.log("NOT_LOGGED_IN", res)
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: res.data.user
        })
      } else if (!res.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        console.log("2")
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
    console.log("test")
    this.checkLoginStatus();
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }, () => console.log(this.state))
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
            render={ props =>(
              <Home {...props} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} /> 
            )}
          /> 
          <Route 
          exact 
          path={"/dashboard"} 
          render={ props =>(
            <DashBoard {...props} loggedInStatus={this.state.loggedInStatus} /> 
          )}
        /> 
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}
