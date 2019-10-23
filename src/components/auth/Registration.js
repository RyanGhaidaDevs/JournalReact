import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
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
    event.preventDefault()

    const {
      email, 
      password, 
      password_confimration
    } = this.state 

    axios.post("http://localhost:3001/registrations",{
      user: {
        email: email, 
        password: password, 
        password_confimration: password_confimration
      }
    }, 
    { withCredentials: true }
    ).then( res => {console.log("regsitration response", res)}).catch( err => {
      console.log("error", error)
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} > 
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={this.state.emails} 
          onChange={this.handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={this.handleChange} 
          required 
        />
         <input 
          type="password" 
          name="password_confirmation" 
          placeholder="Password confirmation" 
          value={this.state.password_confirmation} 
          onChange={this.handleChange} 
          required 
        />
        <button type="submit"> Register </button>
        </form>
      </div>
    )
  }
}
