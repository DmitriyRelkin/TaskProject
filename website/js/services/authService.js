module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:authService
  *
  * @description
  *	This is service for to send post data, come to the registration page and login.
  *
  **/
  module.factory("authService", function ($http, $timeout, $state) {
      var data;
      return {
          sendRegistration: sendRegistration,
          sendLogin: sendLogin
      };
      /**
      *
      * @ngdoc function
      * @name sendRegistration
      * @description
      * This function for to send post data, entered by the user in the form registration.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      function sendRegistration(data) {
        $http.post("/reg", data)
        .success(function (data) {
          console.log('Status: 200 OK');
        })
        .error(function (data) {
          console.log('Status: 501');
        });
        console.log(data);
      }
      /**
      * @ngdoc function
      * @name sendLogin
      * @description
      * This function for to send post data, entered by the user in the form login.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      function sendLogin(data) {
        $http.post("/sig-in", data)
        .success(function (data) {
          console.log('Status: 200 OK');
        })
        .error(function (data) {
          console.log('Status: 501');
        });
        console.log(data);
        /**
        * @ngdoc function
        * @description
        * This function moves to the home page in three seconds
        **/
        $timeout(function () {
          $state.go("home");
        }, 3000);
      }
  });
};
