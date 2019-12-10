import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';



 class FormBugDetails extends Component {
  
   continue = event => {
     event.preventDefault();
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
          placeholder="title and/or key words"
          label="Bug Title"
          name="bugTitle"
          onChange={handleChange("Bug Title")}
          defaultValue={values.bugTitle}
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
          onChange={handleChange("Bug Details")}
          defaultValue={values.bugDescription}
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
          onChange={handleChange("Languages")}
          defaultValue={values.languagesInvolved}
          inputProps={{
            style: {fontSize: 18, padding: 40, width: 500} 
          }}
          />
          
          <Button 
          label="continue"
          primary={true}
          margin='15'
          onClick={this.continue}
          inputProps={{
            style: {fontSize: 28} 
          }}
          > Continue </Button>
          
         
        </Grid> 
          
      </MuiThemeProvider>
     
    )
  }
}
export default FormBugDetails


