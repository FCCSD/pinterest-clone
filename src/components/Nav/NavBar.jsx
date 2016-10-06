import React from 'react';
import UserStore from './../../stores/UserStore/UserStore.js';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: ''
    }
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-logo"><Link to="/home"><i className="fa fa-pinterest fa-2x"></i></Link></div>
        <div className="nav-search">
          <i className="fa fa-search"></i>
          <input type="text" />
        </div>
        <div className="nav-menu">
          <span></span>
        </div>
        <div className="nav-user"><Link to="/user"><i className="fa fa-user fa-2x"></i></Link></div>
        <div className="nav-notifications"><i className="fa fa-bell fa-2x"></i></div>
      </div>
    );
  }
}
