var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var store = require('configureStore').configure();

var actions = require('actions');
var LoginApp = require('LoginApp');
var LoginAPI = require('LoginAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <h1>Main Page</h1>
  </Provider>,
  document.getElementById('app')
);
