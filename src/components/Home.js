import React, { Component } from 'react'
import Registration from './auth/Registration';
import Login from './auth/Login';


export default class Home extends Component  {
  constructor(props) {
    super(props)

    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)

  }

  handleSuccesfulAuth(data) {
    this.props.handleLoggin(data)
    this.props.history.push("/dashboard")
  }

  render(){
    return(
      <div>
        <h1> Home </h1>
        <h1> {this.props.loggedInStatus}</h1> 
        <Registration handleSuccesfulAuth={this.handleSuccesfulAuth}/>
        <Login handleSuccesfulAuth={this.handleSuccesfulAuth}/>
      </div>
    )
  }
}


