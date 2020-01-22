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
    boxShadow: '0 3px 20px 2px rgb(192,192,192)',
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
      filteredLogs: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLikes = this.handleLikes.bind(this);


  }

  componentDidMount() {
     axios.get("http://localhost:3001/alllogs", { withCredentials: true }).then( data => this.setState({logs: data.data.logs}))
  }

  displayLogs(){
    const logs = this.state.logs;
    const props = this.props;
    if(logs){
      return logs.sort(function(a, b) { 
        return a.id - b.id
      }).map(log => {
        return <Grid item sm> 
          <LogCard {...props}  handleLikes={this.handleLikes} user={this.props.user.email} key={log.id} class="not edit" handleEdit={this.props.handleEdit} handleDelete={this.handleDelete} log={log} /> 
        </Grid> 
      })
    }
  }

  displayFilteredLogs(){
    let filteredLogs = this.state.filteredLogs;
    let props = this.props;
    if(filteredLogs){
      return filteredLogs.sort(function(a, b) { 
        return a.id - b.id
      }).map(log => {
        return <Grid item sm> 
          <LogCard {...props}   handleLikes={this.handleLikes} user={this.props.user.email} key={log.id} class="not edit" handleEdit={this.props.handleEdit} handleDelete={this.handleDelete} log={log} /> 
        </Grid> 
      })
    }
  }
    

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      const logs = this.state.logs
      let filteredLogs = logs.filter(log => Object.values(log).join(" ").toString().toLowerCase().split(" ").includes(this.state.search.toLowerCase())) 
       console.log(filteredLogs)
       this.setState({
         filteredLogs: filteredLogs
       })
    })  
  }

   handleLikes(logId, like){
    axios.patch("http://localhost:3001/logLikes",{
      user: {
        id: logId,
        likes: like
      }}, { withCredentials: true }).then( response => { 
        this.setState({
          logs: response.data.allLogs
        })
      })
      .catch( error => {
        console.log("posting like error", error)
  });
}

  render(){
    const { classes } = this.props;

    return(
      <div class='searchParent'>
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
          {this.state.search !== "" ? this.displayFilteredLogs() : this.displayLogs()}
        </Grid> 
      </div>
    )
  }
}

export default withStyles(styles)(AllLogs);

 