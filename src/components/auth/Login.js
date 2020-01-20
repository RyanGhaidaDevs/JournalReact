import React, { Component } from 'react';
import axios from 'axios';
import Button  from '@material-ui/core/Button';




export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      LoginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      email, 
      password
    } = this.state 

    axios.post("http://localhost:3001/sessions",{
      user: {
        email: email, 
        password: password, 
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      console.log("login response", response)
      if (response.data.logged_in){
      this.props.handleLogin(response.data)
      } // add error handling here
    }).catch( err => {
      console.log("login error", err)
    });
  }

  render() {
    return (
      <div id="loginParent">
        <div id="loginChild">
        <h2 style={{marginBottom: 20}}> Welcome Back! </h2> 
        <h3 style={{marginBottom: 10}}> Please enter your email and password below.</h3> 
        <form onSubmit={this.handleSubmit} > 
        <h3> Email </h3>  
        <input 
        style={
          {fontSize: 22} 
        }
          className="login-form-input"
          type="email" 
          name="email" 
          placeholder="Email" 
          value={this.state.emails} 
          onChange={this.handleChange} 
          required 
        />
        <br/>
       
       <h3> Password </h3>
        <input 
        style={
          {fontSize: 22} 
        }
          className="login-form-input"
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={this.handleChange} 
          required 
        />
        
        <Button 
          label="submit"
          type="submit"
          primary={true}
          margin='15'
          variant="focus"
          size="small"
          style={
            {fontSize: 24,
              color: 'grey',
              padding: 10,
            } 
          }
          color="inherit"
          > Login </Button>
        </form>
        </div>
      </div>
    )
  }
}
