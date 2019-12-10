import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';


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
          inputProps={{
            style: {fontSize: 28} 
          }}
          > Continue </Button>

          <Button 
          label="back"
          primary={"false"}
          margin='15'
          onClick={this.back}
          inputProps={{
            style: {fontSize: 28} 
          }}
          > Back </Button>
          
         
        </Grid> 
          
      </MuiThemeProvider>
     
    )
  }
}
export default FormBugSolution;


