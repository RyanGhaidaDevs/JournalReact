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
  registrationTitle: {
    color: "#637299"
  }

  };

 class Registration extends Component {
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

    axios.post("https://bugloggerapi.herokuapp.com/registrations", {
      user: {
        email: email, 
        password: password, 
        password_confimration: password_confimration
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      if (response.data.status === 'created'){
      this.props.handleLogin(response.data)
      this.props.history.push("/homepage")
      } // add error handling here
    }).catch( err => {
      console.log("error", err)
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="regParent" style={{marginTop: 250}} class={classes.root}>
        <div id="regChild"> 
        <h2 class={classes.registrationTitle} style={{ marginTop: 20,marginBottom: 20}}>  Welcome to BugLogger! </h2> 
        <h3 style={{marginBottom: 40, color: "orange" } }> To create an account please enter a valid email and password. </h3> 
        <form onSubmit={this.handleSubmit} > 
        <h3> Email </h3> 
        <input 
        style={
          {fontSize: 22,
            margin: 10,
          width: 325} 
        }
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
          width: 325
         } 
        }
          type="password" 
          name="password" 
          placeholder="Password" 
          value={this.state.password} 
          onChange={this.handleChange} 
          required 
        />
        <br/>
      
         <input 
         style={
          {fontSize: 22,
          width: 325} 
        }
          type="password" 
          name="password_confirmation" 
          placeholder="Password confirmation" 
          value={this.state.password_confirmation} 
          onChange={this.handleChange} 
          required 
        />
        <br/>
        <Button 
          label="submit"
          type="submit"
          primary={true}
          margin='25'
          variant="focus"
          size="small"
          style={
            {fontSize: 24,
              color: 'orange',
              padding: 10,
            } 
          }
          color="inherit"
          > Register </Button>
        </form>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Registration)
