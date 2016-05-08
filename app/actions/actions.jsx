export var setEmailText = (emailText) => {
  return {
    type: 'SET_EMAIL_TEXT',
    emailText
  };
};

export var setPasswordText = (passwordText) => {
  return {
    type: 'SET_PASSWORD_TEXT',
    passwordText
  };
};

export var loginComplete = () => {
  return {
    type: 'LOGIN_COMPLETE'
  };
};
