var React = require('react');
import Thumbnail from '../img/jeff-pic.png';

var UserPreview = React.createClass({
    
  render: function () {
    return (
        <img src={Thumbnail}/>
    )
  }
});

module.exports = UserPreview;
