import React, { Component } from 'react';
// import './App.css';
import HomePage from './characters/HomePage';
import DetailPage from './details/DetailPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Router>
            <Switch>
              <Route 
                path="/"
                exact
                render={(routerProps) => <HomePage {...routerProps} />}
              />
              <Route 
                path="/character/:id"
                exact
                render={(routerProps) => <DetailPage {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
