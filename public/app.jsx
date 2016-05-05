var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = require('Greeter');

ReactDOM.render(
  <Greeter name="Andy" message="This is sample message"/>,
  document.getElementById('app')
);
