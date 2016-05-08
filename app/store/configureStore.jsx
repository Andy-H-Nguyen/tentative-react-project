var redux = require('redux');
var {loginCompleteReducer, emailTextReducer, passwordTextReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    loginComplete: loginCompleteReducer,
    emailText: emailTextReducer,
    passwordText: passwordTextReducer
  });
  
  var store = redux.createStore(reducer, initialState, redux.compose(
    // Enable React Dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
};
