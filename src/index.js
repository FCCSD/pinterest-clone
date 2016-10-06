import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './styles/css/main.css';

import AddWrapper from './components/AddTile/AddWrapper.jsx';
import BoardWrapper from './components/Board/BoardWrapper.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import LoginWrapper from './components/Login/LoginWrapper.jsx';
import UserWrapper from './components/User/UserWrapper.jsx';

function PageWrapper(props) {
  return (
    <div className="page-wrapper">
      <NavBar />
      {props.children}
    </div>
  )
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={PageWrapper}>
      <Route path='/home' component={BoardWrapper} />
      <Route path='/user' component={UserWrapper}/>
      <Route path='/login' component={LoginWrapper} />
      <Route path='/add' component={AddWrapper} />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
