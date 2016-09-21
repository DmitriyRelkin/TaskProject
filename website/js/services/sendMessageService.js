module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:sendMessageData
  *
  * @description
  *	This is service for to send post data, come to the contact page
  *
  **/
  module
  .factory('sendMessageData', sendMessageData);
    sendMessageData.$inject = ['$http'];
    function sendMessageData($http) {
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
        return  $http.post("/contacts", data);
      }
  }
};
