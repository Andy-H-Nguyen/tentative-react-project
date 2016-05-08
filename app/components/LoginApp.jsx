var React = require('react');
import Brand from 'Brand';
import Copywrite from 'Copywrite';
import Drawer from 'Drawer';
import Logo from '../img/washington-department-of-health-2151214158-std.png';

var LoginApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <img src={Logo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LoginApp;
