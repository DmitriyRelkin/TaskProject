module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:validCtrl
  * @description
  * This is the validation controller, and validation function
  *
  **/
  module.controller("validCtrl", function ($scope, $location, $timeout, sendData) {
      /**
      * @ngdoc function
      * @name sendData
      * @description
      * This function send data, entered by the user in the form.
      *
      * @param {Object} data user entered by user in the form. 
      *
      **/
      $scope.sendData = function (data) {
        /**
        * @ngdoc property
        * @name serviceBlock
        * @description
        * This property holds the value for ng-class in the form
        **/
        $scope.spinnerClass = "visible";

        if (data.user) {
          sendData.send("/reg", data);
        } else if (data.contact) {
          sendData.send("/contacts", data);
        } else if (data.login) {
          sendData.send("/sig-in", data);
        }
        /**
        * @ngdoc function
        * @description
        * This function moves to the home page in three seconds
        **/
        $timeout(function () {
          $location.path("/");
        }, 3000);
      }
  });

};
