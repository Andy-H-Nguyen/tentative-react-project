var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  
  var store = redux.createStore(reducer, initialState, redux.compose(
    // Enable React Dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
