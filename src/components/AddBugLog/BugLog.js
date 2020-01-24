import React, { Component } from 'react';
import FormBugDetails  from './FormBugDetails';
import FormBugSolution from './FormBugSolution';
import Confirmation from './Confirmation';
import axios from 'axios';



 class BugLog extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      step: 1, 
      bugTitle: "",
      bugDescription: "",
      languagesInvolved: "",
      links: "",
      solution: "",
      notes: ""
    }
   
  }

  nextStep = () => {
    const { step } = this.state

    this.setState({
      step: step + 1 
    })
  }

  prevStep = ()=> {
    const { step } = this.state

    this.setState({
      step: step - 1 
    })
  }

  //weird syntax?
  handleChange = input => event => {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit= (event) => {
    event.preventDefault();
    const {
      bugTitle, 
      bugDescription,
      languagesInvolved,
      links,
      solution,
      notes
    } = this.state 

    axios.post("https://bugloggerapi.herokuapp.com/logs",{
      user: {
        bugTitle: bugTitle,
        bugDescription: bugDescription,
        languagesInvolved: languagesInvolved,
        links: links,
        solution: solution,
        notes: notes, 
        project_id: this.props.projectSelected.id, 
        user_id: this.props.user.id,
        user_email: this.props.user.email
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      console.log("posting log response", response)
      this.props.history.push("/projectlogs");
     // add error handling here
    }).catch( err => {
      console.log("posting log error", err)
    });

    
  }

  renderSwitch = (step, values) => {
    switch(step) {
      case 1: return (
        <div> 
          <FormBugDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        </div> 
      )
      case 2: return(
        <div> 
        <FormBugSolution 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      </div> 
      )
      case 3: return(
        <div>
        <Confirmation 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          handleSubmit={this.handleSubmit}
          /> 
        </div>
      )
      
    }
  }



  render(){

    const { step, bugTitle,bugDescription,languagesInvolved,links,solution,notes} = this.state;
    const values = { bugTitle,bugDescription,languagesInvolved,links,solution,notes}
    return (
      <div> 
      {this.renderSwitch(step, values)} 
      </div>
    )

  }
}


 export default BugLog
