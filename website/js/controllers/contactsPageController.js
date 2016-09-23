module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:contactPageCtrl
  * @description
  * This is the contact content controller.
  *
  **/
  module
  .controller('contactPageCtrl', contactPageCtrl);
  contactPageCtrl.$inject = ['sendMessageData','notify','$scope'];
  function contactPageCtrl(sendMessageData, notify, $scope) {
    /**
     * @ngdoc property
     * @name vm
     *
     * @description
     * vm is an instance of the current controller.
     */
    var vm = this;

    vm.sendContactData = sendContactData;
    /**
    * @ngdoc property
    * @name vm.contactData
    * @description
    * This property saved data, entered by the user in the form contact-message.
    **/
    vm.contactData = {};
    /**
    * @ngdoc function
    * @name vm.sendContactData
    * @description
    * This function send data, entered by the user in the form contact-message.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    function sendContactData(data) {
      /**
      * @ngdoc property
      * @name vm.spinnerClass
      * @description
      * This property holds the value for ng-class in the form
      **/
      vm.spinnerClass = "loading";
      /**
      * @ngdoc service
      * @name sendMessageData
      * @description
      * This is service for to send post data
      **/
      sendMessageData.send(data).then(function () {
        $scope.contactForm.$setPristine();
        $scope.contactForm.$setUntouched();
        vm.contactData = {};
      },function () {
        notify({ message:'An error occurred on the server!', duration: '2000', position: "center", classes: "alert-danger"});
      });
        notify({ message:'Your message has been successfully sent', duration: '2000', position: "center", classes: "alert-success"});
    };
  }
};
