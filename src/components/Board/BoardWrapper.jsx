import React from 'react';
import AppStore from './../../stores/AppStore.js';
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

  render() {
    let boardTiles = this.state.data.map(function(tile, index) {
      return <Tile data={tile} key={index} />
    })

    return (
      <div className="board">
        <div className="tiles-wrapper">
          {boardTiles}
        </div>
      </div>
    )
  }
}
