import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

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

  submit = event => {
    
  }

   

  render() {

    const { values: {bugTitle,bugDescription,languagesInvolved,links,solution,notes}} = this.props;
    
  //what are the qualities of Grid? 
    
    return (
      <MuiThemeProvider >
        
        <Grid container spacing={10} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh'}} >
        
          <List>
            <ListItem > 
            <ListItemText primary="Bug Title" secondary={bugTitle} style={{padding: 20, width: 500}}/> 
         
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary="Bug Description"
            secondary={bugDescription}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary="Languages Involved"
            secondary={languagesInvolved}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary="Relevant Links"
            secondary={links}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary="Bug Solution"
            secondary={solution}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary="Notes"
            secondary={notes}
            />
            </ListItem>
          </List> 
          
          <Button 
          label="confirm & continue"
          primary={"true"}
          margin='15'
          onClick={() => this.props.handleSubmit(event)}
          inputProps={{
            style: {fontSize: 28} 
          }}
          > 
          Confirm & Continue 
          </Button>

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


 