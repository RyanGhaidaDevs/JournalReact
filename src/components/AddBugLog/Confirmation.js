import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)',
    width: 750
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
  Back: {
    width: 125,
    color: "grey",
    border: "groove",
    background: "white",
    fontSize: 18,
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)'
  },
};

 class Confirmation extends Component {
  constructor(props){
    super(props);
  }

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {

    const { values: {bugTitle,bugDescription,languagesInvolved,links,solution,notes}} = this.props;
    const { classes } = this.props;

    return (
      <MuiThemeProvider >
        
        <Grid
         container 
         spacing={0} 
         direction="column" 
         alignItems="center" 
         justify="center" 
         style={{ minHeight: '100vh'}} >
        
        <Grid item xs={3}>
        </Grid> 
        <TextField
          className={classes.root} 
          placeholder="title and/or key words"
          label="Bug Title"
          name="bugTitle"
          onChange={this.handleChange}
          defaultValue={bugTitle}
          validations={["required", "min:4"]}
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
          defaultValue={bugDescription}
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
          defaultValue={languagesInvolved}
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
          defaultValue={links}
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
          defaultValue={solution}
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
          defaultValue={notes}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500,lineHeight: 1},
          }}
          /> 
          
          <Button 
          label="confirm & continue"
          primary={true}
          margin='15'
          onClick={() => this.props.handleSubmit(event)}
          className={classes.Continue}
          > 
          Confirm 
          </Button>
        </Grid> 
          
      </MuiThemeProvider>
     
    )
  }
}

export default withStyles(styles)(Confirmation);


 