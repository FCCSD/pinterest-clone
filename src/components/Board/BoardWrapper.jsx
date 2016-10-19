import React from 'react';
import AppStore from './../../stores/AppStore/AppStore.js';
import * as AppActions from './../../actions/appActions.js';
import Board from './Board.jsx'


export default class BoardWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      data: AppStore.returnData()
    }

  }

  handleClick(e) {
    let tileId = e.target.id.substring(e.target.id.indexOf('-') + 1, e.target.id.length);
    AppActions.addLike(tileId)
  }

  render() {
    let getData = function(){
      if (this.props.params !== undefined) {
        return AppStore.returnData(this.props.params.username)
      }
      else if (this.props.user !== undefined) {
        return AppStore.returnData(this.props.user)
      }
      else {
        return AppStore.returnData();
      }
    }.bind(this)

    let showAuthControls = function() {
      if (this.props.isAuth) {
        return true
      }
      else {
        return false
      }
    }.bind(this)

    return (
      <div className="board">
        <Board data={getData()} handleClick={this.handleClick.bind(this)} isAuth={showAuthControls()} />
      </div>
    )
  }
}
