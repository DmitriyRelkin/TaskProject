module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:contactPageCtrl
  * @description
  * This is the contact content controller.
  *
  **/
  module.controller("contactPageCtrl", function($scope, sendMessageData) {
    /**
    * @ngdoc function
    * @name sendDataRegistration
    * @description
    * This function send data, entered by the user in the form contact-message.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    $scope.sendContactData = function (data) {
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
      sendMessageData.sendMessage(data);
    }
  });
};
