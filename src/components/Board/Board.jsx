import React   from 'react'
import Tile from './Tile.jsx';

export default class Board extends React.Component {
  render () {
    let boardTiles = this.props.data.map(function(tile, index) {
      return <Tile handleClick={this.props.handleClick} data={tile} key={index} />
    }.bind(this))

    return  (
      <div className='tile-wrapper'>
        {boardTiles}
      </div>
    )
  }
}
