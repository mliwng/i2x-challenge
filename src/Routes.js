import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from './history';
import Login from './components/Login';
import Logout from './components/Logout';
import Recordings from './components/Recordings';

export default function Routes(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/recordings" component={Recordings} />
        <Route component={Login} />  // No match
      </Switch>
    </Router>
  );
};