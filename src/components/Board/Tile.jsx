import React from 'react';

export default class Tile extends React.Component {
  render() {
    let imgStyle = {
      backgroundImage: 'url(' + this.props.data.imgUrl + ')'
    }

    return (
      <div className="tile">
        <div className="tile-img" style={imgStyle}></div>
        <h3 className="tile-title">{this.props.data.imgTitle}</h3>
        <div className="likes">
          <i className="fa fa-heart"></i>
          <span>{this.props.data.likes}</span>
        </div>
      </div>
    );
  }
}
