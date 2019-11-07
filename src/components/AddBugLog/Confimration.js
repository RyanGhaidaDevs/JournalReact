import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import { List, ListItem} from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';


 class Confirmation extends Component {
  
   continue = event => {
     event.preventDefault();
     //process form submital
     this.props.nextStep();
   }

   back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

   

  render() {

    const { values: {bugTitle,bugDescription,languagesInvolved,links,solution,notes}} = this.props;
    

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
            style: {fontSize: 28, padding: 20}
          }}
          />
          <TextField 
          placeholder="in your own words"
          label="Bug Solution"
          name="solution"
          multiline
          rows="12"
          rowsMax="100"
          onChange={handleChange("Bug Solution")}
          defaultValue={values.solution}
          inputProps={{
            style: {fontSize: 28, padding: 20},
            
          }}
          />
            <TextField 
          placeholder="add notes"
          label="Bug Notes"
          name="notes"
          multiline
          rows="12"
          rowsMax="100"
          onChange={handleChange("Bug Notes")}
          defaultValue={values.notes}
          inputProps={{
            style: {fontSize: 28, padding: 20},
            
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
export default Confirmation;


