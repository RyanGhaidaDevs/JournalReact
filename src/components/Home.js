import React, { Component } from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';


export default class Home extends Component  {
  constructor(props) {
    super(props)

    // this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
    // this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }



 

  render(){
    
    return(
      <div>
        <h1> Home Page </h1>
        <h3> Welcome {this.props.user.email} !</h3> 
        
       
      </div>
    )
  }
}


 