import React from 'react';
import AppStore from './../../stores/AppStore/AppStore.js';
import * as AppActions from './../../actions/appActions.js';
import Tile from './Tile.jsx';


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

  handleClick(e) {
    let tileId = e.target.id.substring(e.target.id.indexOf('-') + 1, e.target.id.length);
    AppActions.addLike(tileId)
  }

  render() {
    let boardTiles = this.state.data.map(function(tile, index) {
      return <Tile handleClick={this.handleClick} data={tile} key={index} />
    }.bind(this))

    return (
      <div className="board">
        <div className="tiles-wrapper">
          {boardTiles}
        </div>
      </div>
    )
  }
}
