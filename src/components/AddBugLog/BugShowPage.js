import React, { Component } from 'react';
import axios from 'axios';

export default class BugShowPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      bugTitle: "",
      bugDescription: "",
      languagesInvolved: "",
      links: "",
      solution: "",
      notes: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    this.setState({
      bugTitle: this.props.log.bugTitle,
      bugDescription: this.props.log.bugDescription,
      languagesInvolved: this.props.log.languagesInvolved,
      links: this.props.log.links,
      solution: this.props.log.solution,
      notes: this.props.log.notes
    })
  }
  

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger
    // const {
    //   email, 
    //   password
    // } = this.state 

    // axios.post("http://localhost:3001/sessions",{
    //   user: {
    //     email: email, 
    //     password: password, 
    //   }
    // }, 
    // { withCredentials: true }
    // ).then( response => {
    //   // console.log("login response", response)
    //   if (response.data.logged_in){
    //   this.props.handleLogin(response.data)
    //   } // add error handling here
    // }).catch( err => {
    //   console.log("login error", err)
    // });

  }

  render() {
    return (
      <div >
        <br/>
        <form onSubmit={this.handleSubmit} > 
       <h1> Title: </h1>  
        <input 
          type="text" 
          name="bugTitle" 
          placeholder={this.state.bugTitle} 
          value={this.state.bugTitle} 
          onChange={this.handleChange} 
          required 
        />
         <br/>
         <h1> Description: </h1>  
        <input 
          type="text" 
          name="bugDescription" 
          placeholder={this.state.bugDescription} 
          value={this.state.bugDescription} 
          onChange={this.handleChange} 
          required 
        />
         <br/>
         <h1> Languages Involved: </h1>  
        <input 
          type="text" 
          name="languagesInvolved" 
          placeholder={this.state.languagesInvolved} 
          value={this.state.languagesInvolved} 
          onChange={this.handleChange} 
          required 
        />
         <br/>
         <h1> links: </h1>  
        <input 
          type="text" 
          name="links" 
          placeholder={this.state.links} 
          value={this.state.links} 
          onChange={this.handleChange} 
          required 
        />
         <br/>
         <h1> Solution: </h1>  
        <input 
          type="text" 
          name="solution" 
          placeholder={this.state.solution} 
          value={this.state.solution} 
          onChange={this.handleChange} 
          required 
        />
         <br/>
         <h1> Notes: </h1>  
        <input 
          type="text" 
          name="notes" 
          placeholder={this.state.notes} 
          value={this.state.notes} 
          onChange={this.handleChange} 
          required 
        />
         <br/>
        <button type="submit"> Submit Changes </button>
        </form>
      </div>
    )
  }
}
