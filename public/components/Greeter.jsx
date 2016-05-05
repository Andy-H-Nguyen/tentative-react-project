var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
// Container for Form and Message
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React' ,
      message: 'This is a component'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewInput: function (updates) {
    // Change display only if the field is not empty 
    var state = {};
    
    if (updates.name) {
     state.name = updates.name; 
    }
    
    if (updates.message) {
      state.message = updates.message;
    }
    
    this.setState(state);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message
    return (
        <div>          
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewInput={this.handleNewInput}/>
        </div>
      ); 
  }
});


module.exports = Greeter;