var React = require('react');
import Thumbnail from '../img/logo-thumbnail.png';

var Thumbnails = React.createClass({
    
  render: function () {
    return (
        <img src={Thumbnail}/>
    )
  }
});

module.exports = Thumbnails;
