import React, { Component } from 'react';
import axios from 'axios';




export default class Home extends Component  {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    axios.get("http://localhost:3001/logged_in").then(axios.get("http://localhost:3001/logs")).then(res => res.json).then(data => console.log(data))
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


 