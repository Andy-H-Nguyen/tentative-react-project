var React = require('react');

// Input Form
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    // Stop refreshing
    e.preventDefault();
    
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    
    if (name.length > 0) {
      this.refs.name.value = ''; 
      updates.name = name;
    }
    
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    
    console.log(updates);
    this.props.onNewInput(updates);
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <div><input type="text" ref="name" placeholder="enter name"/></div>
            <div><textarea ref="message" placeholder="enter message"/></div>
            <button>Set Name</button>
          </form>
        </div>
      ); 
    }
});

module.exports = GreeterForm;