import React from 'react';
import AppStore from './../../stores/AppStore/AppStore.js';
import { hashHistory } from 'react-router';
import * as AppActions from './../../actions/appActions.js';

export default class AddWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'Orlando',
      imgUrl: '',
      imgTitle: '',
      likes: 1
    }
  }

  handleSubmit(e) {
    if (this.state.imgUrl && this.state.title !== '') {
      AppActions.addTile(this.state);
      hashHistory.push('/home');
    }
  }

  handleChange(e) {
    if (e.target.id === 'add-url') {
      this.setState({
        imgUrl: e.target.value
      })
    }
    else if (e.target.id === 'add-title') {
      this.setState({
        imgTitle: e.target.value
      })
    }
  }

  render () {
    return (
      <div className="add-well">
        <h1>Add a Tile</h1>
        <input id='add-url' onChange={this.handleChange.bind(this)} placeholder="Image Url" />
        <input id='add-title' onChange={this.handleChange.bind(this)} placeholder="Image Title" />
        <button onClick={this.handleSubmit.bind(this)}>Submit Image</button>
      </div>
    )
  }
}
