import React, { Component } from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';


export default class Home extends Component  {
  constructor(props) {
    super(props)

    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleSuccesfulAuth(data) {
    this.props.handleLogin(data)
    this.props.history.push("/dashboard")
  }

  handleLogoutClick(){
    axios.delete("http://localhost:3001/logout", {withCredentials: true}).then( res => {
      this.props.handleLogout();
    }).catch(err => {
      console.log("logout error", err)
    })
  }

  render(){
    return(
      <div>
        <h1> Home </h1>
        <h1> {this.props.loggedInStatus}</h1> 
        <button onClick={()=> this.handleLogoutClick()} > Logout </button>
        <Registration handleSuccesfulAuth={this.handleSuccesfulAuth}/>
        <Login handleSuccesfulAuth={this.handleSuccesfulAuth}/>
      </div>
    )
  }
}


 