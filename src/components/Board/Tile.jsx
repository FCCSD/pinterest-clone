import React from 'react';
import { Link } from 'react-router';

export default class Tile extends React.Component {
  render() {
    let imgStyle = {
      backgroundImage: 'url(' + this.props.data.imgUrl + ')'
    }

    let showAuthControls = function() {
      if (this.props.isAuth) {
        return (
          <button className="delete-tile" onClick={this.props.handleClick}>Delete</button>
        )
      }
      else {
        return null;
      }
    }.bind(this)

    return (
      <div className="tile">
        <div className="tile-img" style={imgStyle}></div>
        <h3 className="tile-title">{this.props.data.imgTitle}</h3>
        <Link to={'/user/' + this.props.data.user}><h3 className="tile-user">{this.props.data.user}</h3></Link>
        <div id={'tile-' + this.props.data.id} onClick={this.props.handleClick} className="likes">
          <i className="fa fa-heart"></i>
          <span>{this.props.data.likes}</span>
        </div>
        {showAuthControls()}
      </div>
    );
  }
}
