import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';


 class Confirmation extends Component {

  //  continue = event => {
  //    event.preventDefault();
  //    //process form submital
  //    this.props.nextStep();
  //  }

   back = event => {
    event.preventDefault();
    this.props.prevStep();
  }



   

  render() {

    const { values: {bugTitle,bugDescription,languagesInvolved,links,solution,notes}} = this.props;
    
  //what are the qualities of Grid? 
  //should i default to something easier becasue im unwilling to learn material ui and flex box? 
    
    return (
      <MuiThemeProvider >
        
        <Grid container spacing={10} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh', width: '200vh'}} >
        
          <List>
            <ListItem > 
            <ListItemText  primary={<span style={{fontSize: 38}}>Bug Title</span>} secondary={bugTitle} /> 
         
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary={<span style={{fontSize: 38}}> Description</span>}
            secondary={<span style={{fontSize: 18}}> {bugDescription}}</span>}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary={<span style={{fontSize: 38}}>Languages Involved</span>}
            secondary={<span style={{fontSize: 18}}> {languagesInvolved}}</span>}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary={<span style={{fontSize: 38}}> Relevant Links</span>}
            secondary={<span style={{fontSize: 18}}> {links}}</span>}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary={<span style={{fontSize: 38}}> Bug Solution</span>}
            secondary={<span style={{fontSize: 18}}> {solution}}</span>}
            />
            </ListItem>
            <ListItem > 
             <ListItemText 
            primary={<span style={{fontSize: 38}}> Notes</span>}
            secondary={<span style={{fontSize: 18}}> {notes}}</span>}
            />
            </ListItem>
          </List> 
          
          <Button 
          label="confirm & continue"
          primary={true}
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


 