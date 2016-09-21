module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:contactPageCtrl
  * @description
  * This is the contact content controller.
  *
  **/
  module.controller("contactPageCtrl", function($scope, sendMessageData, notify, $state) {
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
      * @ngdoc service
      * @name sendMessageData
      * @description
      * This is service for to send post data
      **/
      sendMessageData.sendMessage(data).then(function () {
        $state.go("home");
      },function () {
        notify({ message:'An error occurred on the server!', duration: '2000', position: "center", classes: "alert-danger"});
      });
       notify({ message:'Your message has been successfully sent', position: "center", classes: "alert-success"});
    }
  });
};
