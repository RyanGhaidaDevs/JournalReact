import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from './DashBoard';
import Home from './Home';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
      <Switch>
        <Route exat path={"/"} component={Home} /> 
        <Route exat path={"/dashbaord"} component={DashBoard} /> 
      </Switch>
      </BrowserRouter> 
      </div>
    );
  }
}
