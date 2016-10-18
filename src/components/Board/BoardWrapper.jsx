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

  componentWillMount() {
    AppStore.on('change', () => {
      this.setState({
        data: AppStore.returnData()
      });
    });
  }

  componentWillReceiveProps() {
    console.log('props recieved')
    if (this.props.params.username) {
      this.setState({
        data: AppStore.returnData(this.props.params.username)
      })
    }
    else(
      this.setState({
        data: AppStore.returnData()
      })
    )
  }

  handleClick(e) {
    let tileId = e.target.id.substring(e.target.id.indexOf('-') + 1, e.target.id.length);
    AppActions.addLike(tileId)
  }

  render() {


    return (
      <div className="board">
        {this.props.children}
        <Board data={this.state.data} handleClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}
