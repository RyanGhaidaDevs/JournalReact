import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


 class FormBugDetails extends Component {
  
   continue = event => {
     e.preventDefault();
     this.props.nextStep();
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
          placeholder="Add a title to this Bug Log"
          label="Bug Title"
          onChange={handleChange("Bug Title")}
          defaultValue={values.bugTitle}
          />
          <TextField 
          placeholder="Whats the nature of this bug?"
          label="Bug Description"
          multiline
          rowsMax="10"
          onChange={handleChange("Bug Title")}
          defaultValue={values.bugDescription}
          />
         
        </Grid> 
          
      </MuiThemeProvider>
    )
  }
}
export default FormBugDetails


