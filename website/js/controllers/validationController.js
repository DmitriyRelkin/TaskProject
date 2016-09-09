module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:validCtrl
  * @description
  * This is the validation controller, and validation function
  *
  * @param {data}  data user input
  *
  * @return post requset
  **/
  module.controller("validCtrl", function ($scope, $location, $timeout, sendRequest) {
      $scope.regData = {};
      $scope.logData = {};
      $scope.mesData = {};

      $scope.sendRequest = function () {

        $scope.spinnerClass = "visible";

        var dataReg = $scope.regData;
        var dataLog = $scope.logData;
        var dataMes = $scope.mesData;

        if (dataReg) {
          sendRequest.send("/contacts", dataReg);
        } else if (dataLog) {
          sendRequest.send("/sig-in", dataLog);
        } else if (dataMes) {
          sendRequest.send("/reg", dataMes);
        }

        $timeout(function () {
          $location.path("/");
        }, 3000);
      }
  });

};
