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
        
          <List>
            <ListItem className={classes.root}> 
            <ListItemText 
            className={classes.root} 
            primary={<span style={{fontSize: 28}}>Bug Title</span>} 
            secondary={<span style={{fontSize: 18}}> {bugTitle}</span>} 
            /> 
         
            </ListItem>
            <ListItem className={classes.root}> 
             <ListItemText
             className={classes.root} 
              primary={<span style={{fontSize: 28}}> Description</span>}
              secondary={<span style={{fontSize: 18}}> {bugDescription}</span>}
            />
            </ListItem>
            <ListItem className={classes.root}> 
             <ListItemText 
             className={classes.root}
              primary={<span style={{fontSize: 28}}>Languages Involved</span>}
              secondary={<span style={{fontSize: 18}}> {languagesInvolved}</span>}
            />
            </ListItem>
            <ListItem className={classes.root}> 
             <ListItemText 
             className={classes.root}
              primary={<span style={{fontSize: 28}}> Relevant Links</span>}
              secondary={<span style={{fontSize: 18}}> {links}</span>}
            />
            </ListItem>
            <ListItem className={classes.root}> 
             <ListItemText 
             className={classes.root}
              primary={<span style={{fontSize: 28}}> Bug Solution</span>}
              secondary={<span style={{fontSize: 18}}> {solution}</span>}
            />
            </ListItem>
            <ListItem className={classes.root}> 
             <ListItemText 
             className={classes.root}
              primary={<span style={{fontSize: 28}}> Notes</span>}
              secondary={<span style={{fontSize: 18}}> {notes}</span>}
            />
            </ListItem>
          </List> 
          
          <Button 
          label="confirm & continue"
          primary={true}
          margin='15'
          onClick={() => this.props.handleSubmit(event)}
          className={classes.Continue}
          > 
          Confirm 
          </Button>

          <Button 
          label="back"
          primary={"false"}
          margin='15'
          onClick={this.back}
          className={classes.Back}
          > Back 
          </Button>
          
         
        </Grid> 
          
      </MuiThemeProvider>
     
    )
  }
}

export default withStyles(styles)(Confirmation);


 