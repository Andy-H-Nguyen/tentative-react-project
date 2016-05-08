var uuid = require('node-uuid');
var moment = require('moment');

export var loginCompleteReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_COMPLETE':
      return true;
    default:
      return state;
  };
};

export var emailCompleteReducer = (state = false, action) => {
  switch (action.type) {
    case 'EMAIL_COMPLETE':
      return true;
    default:
      return state;
  };
};

export var emailTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_EMAIL_TEXT':
      return action.emailText;
    default:
      return state;
  };
};

export var passwordTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PASSWORD_TEXT':
      return action.passwordText;
    default:
      return state;
  };
};
