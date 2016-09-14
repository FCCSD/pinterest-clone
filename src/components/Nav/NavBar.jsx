import React from 'react';

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
        <div className="nav-logo"><i className="fa fa-pinterest fa-2x"></i></div>
        <div className="nav-search">
          <i className="fa fa-search"></i>
          <input type="text" />
        </div>
        <div className="nav-menu">
          <span></span>
        </div>
        <div className="nav-user"><i className="fa fa-user fa-2x"></i></div>
        <div className="nav-notifications"><i className="fa fa-bell fa-2x"></i></div>
      </div>
    );
  }
}
