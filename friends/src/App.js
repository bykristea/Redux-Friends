import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Friend from './components/Friend';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header>OMG Friends!</header>
        <NavLink to='/add'>Add Friends!</NavLink>

        {this.props.friends.map( friend =>
        < Friend friend={friend} key={friend.id} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends
});

export default connect(mapStateToProps)(App);
