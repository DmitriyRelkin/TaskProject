module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:authService
  *
  * @description
  *	This is service for to send post data, come to the registration page and login.
  *
  **/
  module
  .factory('authService', authService);
    authService.$inject = ['$http'];
    function authService($http) {
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
        return $http.post("/reg", data);
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
        return $http.post("/sign-in", data);
      }
    }
};
