module.exports = function(module) {
  /**
  * @ngdoc service
  * @name module.directive:requsetService
  *
  * @description
  *	This is service for send request
  *
  **/
  var module = angular.module("requsetService", []);
  module.factory("sendRequest", function ($http) {
      var data;
      return {
          send: function(url, data) {
             $http.post(url, data)
              .success(function (data) {
                  $scope.PostDataResponse = data;
                  console.log('Status: 200 OK');
              })
              .error(function (data) {
                  console.log('Status: 501');
              });
              console.log(data);
          }
      };
  });
};
