import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { getFriends } from './actions/';

import './App.css';
import Friend from './components/Friend';
import AddForm from './components/AddFriend';
class App extends Component {
  componentDidMount() {
    this.props.getFriends()
  }
  render() {
    return (
      <div className="App">
        <header>OMG Friends!</header>
        <NavLink to='/add'>Add Friends!</NavLink>


      <AddForm />
      {this.props.friends.map( friend =>
        <Friend friend={friend} key={friend.id} />
      )}

        {this.props.friends.map( friend =>
        < Friend friend={friend} key={friend.id} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading


  }
};

export default connect(mapStateToProps, { getFriends })(App);
