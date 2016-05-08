var React = require('react');
import Logo from '../img/washington-department-of-health-2151214158-std.png';

var Drawer = React.createClass({
    
  render: function () {
    return (
        <img src={Logo}/>
    )
  }
});

module.exports = Drawer;
