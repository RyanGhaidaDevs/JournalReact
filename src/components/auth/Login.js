import React, { Component } from 'react';
import axios from 'axios';
import Button  from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    background: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 20px 2px rgb(192,192,192)',
  },
  loginTitle: {
    color: "#637299"
  }

  };


 class Login extends Component {
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

    axios.post("https://bugloggerapi.herokuapp.com/sessions",{
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
      this.props.history.push("/homepage")
      } // add error handling here
    }).catch( err => {
      console.log("login error", err)
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div id="loginParent"   style={{marginTop: 250}} class={classes.root}>
        <div id="loginChild">
        <h2 class={classes.loginTitle} style={{marginBottom: 20, marginTop: 20}}> Welcome Back! </h2> 
        <h3 style={{marginBottom: 40, color:"orange"}}> Please enter your email and password below.</h3> 
        <form onSubmit={this.handleSubmit} > 
        <h3> Email </h3>  
        <input 
        style={
          {fontSize: 22,
            margin: 20,
            width: 325} 
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
          {fontSize: 22,
            margin: 20,
            width: 325} 
        }
          className="login-form-input"
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={this.handleChange} 
          required 
        />
        <br/>
        
        <Button 
          label="submit"
          type="submit"
          primary={true}
          margin='15'
          variant="focus"
          size="small"
          style={
            {fontSize: 24,
              color: 'orange',
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


export default withStyles(styles)(Login)
