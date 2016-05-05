/* global React */
/* global ReactDOM */

// Messages
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    
    return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      ); 
    }
});

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
            <input type="text" ref="name" placeholder="enter name"/>
            <textarea ref="message" placeholder="enter message"/>
            <button>Set Name</button>
          </form>
        </div>
      ); 
    }
});

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

ReactDOM.render(
  <Greeter name="Andy" message="This is sample message"/>,
  document.getElementById('app')
);
