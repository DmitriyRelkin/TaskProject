module.exports = function(module) {
  /**
  * @ngdoc filter
  * @name sampleApp:trustAsResourceUrl
  * @restrict A
  *	@description
  *	This is filter for trust As resource Url, used in iframe.
  *
  * @param $sce - garter for the safe context
  **/
  module
  .filter('trustAsResourceUrl', ['$sce', function($sce) {
    /**
    * @ngdoc function
    *
    * @param (url) for which the security context garter
    *
    *	@description
    *	This is function for email validation.
    *
    * @return {Bolean}
    **/
  return function(val) {
      return $sce.trustAsResourceUrl(val);
  };
  }])
};
