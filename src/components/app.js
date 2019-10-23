import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from './DashBoard';
import Home from './Home';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLoggin = this.handleLoggin.bind(this)

  }

  handleLoggin(data){
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
      <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path={"/"} 
            render={ props =>(
              <Home {...props} handleLoggin={this.handleLoggin} loggedInStatus={this.state.loggedInStatus} /> 
            )}
          /> 
          <Route 
          exact 
          path={"/dashboard"} 
          render={ props =>(
            <DashBoard {...props} loggedInStatus={this.state.loggedInStatus} /> 
          )}
        /> 
        </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}
