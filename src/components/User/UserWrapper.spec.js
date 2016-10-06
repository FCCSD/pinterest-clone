import UserWrapper from './UserWrapper.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

it('Should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserWrapper />, div);
})
