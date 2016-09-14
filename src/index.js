import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';

import BoardWrapper from './components/Board/BoardWrapper.jsx';
import NavBar from './components/Nav/NavBar.jsx';

let PageWrapper = function() {
  return (
    <div className="page-wrapper">
      <NavBar />
      <BoardWrapper />
    </div>
  )
}

ReactDOM.render(
  <PageWrapper />
  ,
  document.getElementById('root')
);
