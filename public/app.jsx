var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm');
var Greeter = require('./components/Greeter');
ReactDOM.render(
  <Greeter name="Andy" message="This is sample message"/>,
  document.getElementById('app')
);
