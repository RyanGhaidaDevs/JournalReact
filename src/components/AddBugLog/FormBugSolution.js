import React, { Component } from 'react';
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

 class FormBugSolution extends Component {
  
   continue = event => {
     event.preventDefault();
     this.props.nextStep();
   }

   back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

   

  render() {

    const {values, handleChange} = this.props;
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
          placeholder="relevant links"
          label="Links"
          name="links"
          onChange={handleChange("Links")}
          defaultValue={values.links}
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
          rows="6"
          rowsMax="100"
          onChange={handleChange("Bug Solution")}
          defaultValue={values.solution}
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
          rows="6"
          rowsMax="100"
          onChange={handleChange("Bug Notes")}
          defaultValue={values.notes}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500,lineHeight: 1},
          }}
          />
          
          <Button 
          label="continue"
          primary={"true"}
          margin='15'
          onClick={this.continue}
          className={classes.Continue}
          > Continue </Button>

          <Button 
          label="back"
          primary={"false"}
          margin='15'
          onClick={this.back}
          className={classes.Back}

          > Back </Button>
          
         
        </Grid> 
          
      </MuiThemeProvider>
     
    )
  }
}
export default withStyles(styles)(FormBugSolution);


