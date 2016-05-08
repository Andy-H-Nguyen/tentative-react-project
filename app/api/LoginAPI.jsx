var {connect} = require('react-redux');

module.exports = {
  authenticate: function(user, pass) {
   if (user === "test@email.com" && pass === "password") {
      return true;   
   } else {
      return false; 
   }
  }
};