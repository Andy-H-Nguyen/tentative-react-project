var React = require('react');
import Thumbnail from '../img/jeff-pic.png';
import { connect } from 'react-redux';

var UserPreview = React.createClass({
  render: function () {
    return (
      <div>
        <div className="user-preview-container">
            <img src={Thumbnail}/>         
            <p>Jeffery Aramini</p>
            <p>jeff_aramini@ihealthsolutions.net</p>
        </div>
      </div>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    state: store
  };
}

module.exports = UserPreview;

export default connect(mapStateToProps)(UserPreview);
