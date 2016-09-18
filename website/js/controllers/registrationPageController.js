module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:registrationContentCtrl
  * @description
  * This is the registration content controller.
  *
  **/
  module.controller("registrationContentCtrl", function($scope, authService, ngNotify) {
    /**
    * @ngdoc function
    * @name sendDataRegistration
    * @description
    * This function send data, entered by the user in the form registration.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    $scope.sendDataRegistration = function (data) {
      /**
      * @ngdoc property
      * @name spinnerClass
      * @description
      * This property holds the value for ng-class in the form
      **/
      $scope.spinnerClass = "loading";
      /**
      * @ngdoc authService
      * @name spinnerClass
      * @description
      * This is service for to send post data
      **/
      authService.sendRegistration(data);
      ngNotify.set('Registration is successful', 'success');
      ngNotify.config({
        theme: 'pure',
        position: 'bottom',
        duration: 3000,
        type: 'Modular',
        sticky: true,
        button: true,
        html: false
      });
    }
  });
};
