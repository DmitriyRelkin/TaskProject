module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:loginCtrl
  * @description
  * This is the login page controller
  *
  **/
  // angular
  module
  .controller('loginCtrl', loginCtrl);
  loginCtrl.$inject = ['authService', '$state'];
  function loginCtrl(authService, $state) {
    /**
     * @ngdoc property
     * @name vm
     *
     * @description
     * vm is an instance of the current controller.
     */
    var vm = this;
    /**
    * @ngdoc function
    * @name sendDataLogin
    * @description
    * This function send data, entered by the user in the form login.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    vm.sendDataLogin = function(data) {
      /**
      * @ngdoc property
      * @name spinnerClass
      * @description
      * This property holds the value for ng-class in the form
      **/
      vm.spinnerClass = "loading";
      /**
      * @ngdoc service
      * @name authService
      * @description
      * This is service for to send post data
      **/
      authService.sendLogin(data).then(function () {
        $state.go("home");
      },function () {
        notify({ message:'An error occurred on the server!', duration: '2000', position: "center", classes: "alert-danger"});
      });
    }
  }
};
