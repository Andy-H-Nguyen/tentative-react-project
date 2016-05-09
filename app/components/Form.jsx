var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var LoginAPI = require('LoginAPI');

var UserPreview = require('UserPreview');
import Logo from '../img/washington-department-of-health-2151214158-std.png';
import User from '../img/group-2.png';
import Password from '../img/group.png';

var Form = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    
    dispatch(actions.setEmailText(email));
    dispatch(actions.setPasswordText(password));
    
    if (LoginAPI.authenticate) {
      dispatch(actions.loginComplete);
    }
  },
  render: function () {
    var {dispatch} = this.props;
    return (
        <div>
          <UserPreview/>
          <form onSubmit={this.handleSubmit}>
            <div className="form-container">
              <div className="form-input-container">
                <img src={User}/>
                <input className="form-input" ref="email" placeholder="EMAIL" onChange={() => {
                  var email = this.refs.email.value;
              }}></input>
              </div>
              <div className="form-input-container">
                <img src={Password}/><input className="form-input" ref="password" placeholder="PASSWORD"></input>
              </div>
              <div className="form-input-container-next">
                <button>Next</button>
              </div>  
            </div>
          </form>
        </div>
    )
  }
});

function mapStateToProps(state) {
  return {state:state};
}

export default connect(mapStateToProps)(Form);
