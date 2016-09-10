module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:sendData
  *
  * @description
  *	This is service for send request
  *
  **/

  module.factory("sendData", function ($http) {
      var data;
      return {
          send: send
      };

      function send(url, data) {
         $http.post(url, data)
          .success(function (data) {
              console.log('Status: 200 OK');
          })
          .error(function (data) {
              console.log('Status: 501');
          });
          console.log(data);
      }
  });
};
