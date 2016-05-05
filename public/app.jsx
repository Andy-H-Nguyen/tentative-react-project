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
    
    var name = this.refs.name.value;
    
    if (name.length > 0) {
      this.refs.name.value = ''; 
      this.props.onNewName(name);
    }
    
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name"/>
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
      name: this.props.name 
    }
  },
  handleNewName: function (name) {
    this.setState({
      name: name  
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message
    return (
        <div>          
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewName={this.handleNewName}/>
        </div>
      ); 
  }
});

ReactDOM.render(
  <Greeter name="Andy" message="This is sample message"/>,
  document.getElementById('app')
);
