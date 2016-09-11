module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:sendMessageData
  *
  * @description
  *	This is service for to send post data, come to the contact page
  *
  **/
  module.factory("sendMessageData", function ($http) {
      var data;
      return {
          sendMessage: sendMessage
      };
      /**
      * @ngdoc function
      * @name sendRegistration
      * @description
      * This function for to send post data, entered by the user in the form contact-message.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      function sendMessage(data) {
        $http.post("/contacts", data)
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
