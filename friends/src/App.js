import React, { Component } from 'react';
import FriendList from './components/FriendList';
import './App.css';
import LoginPage from './components/loginpage';
import {Route, } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <div>
      <Route path = "/login" component = {LoginPage} />

        </div>
      <div>
        
        <PrivateRoute path = "/FriendList" component = {FriendList} />
        
      </div>
      </div>
    );
  }
}

export default App;


