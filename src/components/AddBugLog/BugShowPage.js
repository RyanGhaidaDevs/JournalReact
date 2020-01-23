import React, { Component } from 'react';
import axios from 'axios';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)'
  },
  Continue: {
    width: 125,
    color: "grey",
    border: "groove",
    background: "white",
    fontSize: 18,
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)',
    margin: 15
  },
};


class BugShowPage extends Component {
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

  handleSubmit = (event) => {
    event.preventDefault();
    const {bugTitle, bugDescription,languagesInvolved,links,solution,notes,id } = this.state 

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
    }, { withCredentials: true }).then( response => { this.props.history.push("/projectLogs")})
    .catch( error => {
      console.log("posting log error", error)
    });
  }

  render() {

    const { classes } = this.props;

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
          className={classes.root} 
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
          className={classes.root}
          placeholder="describe the context, nature and details of the bug"
          label="Bug Description"
          name="bugDescription"
          multiline

          rowsMax="100"
          onChange={this.handleChange}
          defaultValue={this.props.log.bugDescription}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500, lineHeight: 1},
          }}
          />

          <TextField 
          className={classes.root}
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
          className={classes.root}
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
          className={classes.root}
          placeholder="solution"
          label="Bug Solution"
          name="solution"
          multiline
         
          rowsMax="100"
          onChange={this.handleChange}
          defaultValue={this.props.log.solution}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500,  lineHeight: 1}, 
          }}
          />

          <TextField 
          className={classes.root}
          placeholder="additional notes; dependecies, versions etc. "
          label="Notes"
          name="notes"
          multiline
          
          rowsMax="100"
          onChange={this.handleChange}
          defaultValue={this.props.log.notes}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500,lineHeight: 1},
          }}
          />

          <Button 
          className={classes.Continue}
          label="submit"
          primary={"true"}
          margin='15'
          onClick={this.handleSubmit}
          >
            Update
          </Button>
      </Grid> 
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(BugShowPage)