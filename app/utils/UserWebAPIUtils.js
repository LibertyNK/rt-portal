var $ = require('jquery');

module.exports = {
  /*
   @param {Promise}
   */
  manuallogin: function(data) {
    return $.ajax({
      url: '/login',
      type: 'POST',
      data: data
    });
  },

  logout: function() {
    return $.ajax({
      url: '/logout',
      type: 'GET'
    });
  },

  signUp: function(data) {
    return $.ajax({
      url: '/users',
      type: 'POST',
      data: data
    });
  },
  
  displayDashboard: function() {
    return $.ajax({
      url: '/dashboard',
      type: 'GET'
    })
  }
};

