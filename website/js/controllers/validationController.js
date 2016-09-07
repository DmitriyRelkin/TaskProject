module.exports = function(module) {
  // ================VALIDATION===============================
  module.controller("validCtrl", function ($scope, $location, $timeout, sendRequest) {
      $scope.regData = {};
      $scope.logData = {};
      $scope.mesData = {};
      $scope.messageReg = "";
      $scope.messageMes = "";
      $scope.messageLog = "";

      $scope.sendRequest = function () {
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
        $scope.messageReg = "Registration successfully completed!";
        $scope.messageMes = "Message sent successfully!";
        $scope.messageLog = "Login successfully completed!";

        $timeout(function () {
          $location.path("/");
        }, 3000);
      }
  });

};
