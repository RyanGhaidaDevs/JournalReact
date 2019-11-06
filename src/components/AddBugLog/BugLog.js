import React, { Component } from 'react';
import FormBugDetails  from './FormBugDetails';



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
        <h3> Solution Detils </h3> 
      )
      case 3: return(
        <h3> Confirmation </h3>  
      )
      case 4: return(
        <h3> Success </h3> 
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