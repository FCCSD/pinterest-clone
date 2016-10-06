import React from 'react';
import UserStore from './../../stores/UserStore/UserStore.js';
import { Link } from 'react-router';

export default class UserWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      user: UserStore.getUser()
    }
  }


  render () {
    return (
      <div className="user">
        <h1>Welcome {this.state.user.username}</h1>
        <h2><Link to='/add'>Add a tile</Link></h2>
      </div>
    )
  }
}
