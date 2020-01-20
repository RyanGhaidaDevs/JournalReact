import React, { Component } from 'react';
import axios from 'axios';
import LogCard from './AddBugLog/LogCard';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  Search: {
    background: 'white',
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)',
    width: 800,
    margin: 20,
    
  },

  };

class AllLogs extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      logs: false,
      search: "",
      filterdLogs: []
    }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
     axios.get("http://localhost:3001/alllogs", { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

  displayLogs(){
    const logs = this.state.logs;
    const props = this.props;
    console.log(props)
    if(logs){
      return logs.map(log => {
        return <Grid item sm> 
          <LogCard {...props} user={this.props.user.email} key={log.id} class="not edit" handleEdit={this.props.handleEdit} handleDelete={this.handleDelete} log={log} /> 
        </Grid> 
      })
    }
  }
    

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    }, ()=> console.log(this.state)) 

   
  
  }

  render(){
    const { classes } = this.props;

    return(
      <div id="alllogs" class='searchParent'>
      <div class='searchChild'> 
      <TextField
        className={classes.Search}
        placeholder="Search"
        name="search"
        inputProps={{ style: {textAlign: 'center'} }}
        onChange={this.handleChange}     
      />
    </div> 
        <Grid container>
        {this.displayLogs()}
        </Grid> 
      </div>
    )
  }
}

export default withStyles(styles)(AllLogs);

 