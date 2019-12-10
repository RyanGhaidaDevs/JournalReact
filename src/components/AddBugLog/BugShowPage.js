import React, { Component } from 'react';
import axios from 'axios';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';


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
      notes: this.props.log.notes,
      id: this.props.log.id
    })
  }
  

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit= (event)=> {
    event.preventDefault();

    const {
      bugTitle, 
      bugDescription,
      languagesInvolved,
      links,
      solution,
      notes, 
      id
    } = this.state 

    axios.patch("http://localhost:3001/logs",{
      user: {
        bugTitle: bugTitle,
        bugDescription: bugDescription,
        languagesInvolved: languagesInvolved,
        links: links,
        solution: solution,
        notes: notes, 
        id: id 
      }
    }, 
    { withCredentials: true }
    ).then( response => {
      console.log("posting log response", response)
      this.props.history.push("logs");
     // add error handling here
    }).catch( err => {
      console.log("posting log error", err)
    });

    
  }

  render() {
     
    return (
      <MuiThemeProvider >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
        <Grid item xs={3}>
        </Grid> 
        <TextField 
          placeholder="title and/or key words"
          label="Bug Title"
          name="bugTitle"
          onChange={this.handleChange}
          defaultValue={this.props.log.bugTitle}
          inputProps={{
            style: {fontSize: 28, padding: 40, width: 500}
          }}
          />

          <TextField 
          placeholder="describe the context, nature and details of the bug"
          label="Bug Description"
          name="bugDescription"
          multiline
          rows="12"
          rowsMax="100"
          onChange={this.handleChange}
          defaultValue={this.props.log.bugDescription}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500, lineHeight: 1},
            
          }}
          />

          <TextField 
          placeholder="i.e. JS, Ruby..."
          label="Languages involved"
          name="languagesInvolved"
          multiline
          rowsMax="10"
          onChange={this.handleChange}
          defaultValue={this.props.log.languagesInvolved}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500} 
          }}
          />

          <TextField 
          placeholder="relevant links"
          label="Links"
          name="links"
          onChange={this.handleChange}
          defaultValue={this.props.log.links}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500}
          }}
          />

          <TextField 
          placeholder="solution"
          label="Bug Solution"
          name="solution"
          multiline
          rows="6"
          rowsMax="100"
          onChange={this.handleChange}
          defaultValue={this.props.log.solution}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500,  lineHeight: 1}, 
          }}
          />

             <TextField 
          placeholder="additional notes; dependecies, versions etc. "
          label="Notes"
          name="notes"
          multiline
          rows="6"
          rowsMax="100"
          onChange={this.handleChange}
          defaultValue={this.props.log.notes}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500,lineHeight: 1},
          }}
          />

          <Button 
          label="submit"
          primary={"true"}
          margin='15'
          onClick={this.handleSubmit}
          inputProps={{
            style: {fontSize: 28} 
          }}> 
            Submit Changes 
          </Button>
      </Grid> 
      </MuiThemeProvider>
    )
  }
}

{/* <div >
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
      </div> */}
